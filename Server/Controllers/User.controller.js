import { Webhook } from "svix";
import userModel from "../Models/User.model.js";
import razorpay from "razorpay";
import transactionModel from "../Models/Transaction.model.js";

// API controller function to manage clerk user with DB

// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  console.log(req.headers);

  try {
    //creating instance with Clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API controller to get user available credit data

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const userData = await userModel.findOne({ clerkId });
    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Payment gateway initialization
const razorPayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// API to make payment for credits

const paymentRazorPay = async (req, res) => {
  try {
    const { clerkId, planId } = req.body;

    const userData = await userModel.findOne({ clerkId });

    if (!userData || !planId) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 5;
        amount = 10;
        break;

      case "Advanced":
        plan = "Advanced";
        credits = 20;
        amount = 50;
        break;

      case "Business":
        plan = "Business";
        credits = 90;
        amount = 200;
        break;

      default:
        break;
    }

    date = Date.now();

    // Creating transaction

    const transactionData = {
      clerkId,
      amount,
      credits,
      plan,
      date,
    };

    const newTransaction = await transactionModel.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    await razorPayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.json({ success: false, message: "Error Occured" });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API Controller to verify the razorpay Payment

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorPayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      const transactionData = await transactionModel.findById(
        orderInfo.receipt
      );

      if (transactionData.payment) {
        return res.json({ success: false, message: "Payment Failed" });
      }

      // Adding credits in userData
      const userData = await userModel.findOne({
        clerkId: transactionData.clerkId,
      });

      const creditBalance = userData.creditBalance + transactionData.credis;

      await userModel.findOneAndUpdate(userData._id, { creditBalance });

      // Making the payment true

      await transactionModel.findOneAndUpdate(transactionData._id, {
        payment: true,
      });

      res.json({
        success: true,
        message: "Credits addeed",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { clerkWebhooks, userCredits, paymentRazorPay, verifyRazorpay };

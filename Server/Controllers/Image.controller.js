import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../Models/User.model.js";

// Controller to remove bg from image
const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "Insufficient Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file.path;

    //Reading the image file
    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("file", imageFile);

    const { data } = await axios.post(
      "https://api.withoutbg.com/v1.0/image-without-background",
      formData,
      {
        headers: {
          "X-API-Key": process.env.WITHOUTBG_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background Removed",
    });
  } catch (error) {
    if (error.response) {
      console.error("API Response:", error.response.data);
    } else {
      console.log(error.message);
    }
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage };

import express from "express";
import {
  clerkWebhooks,
  paymentRazorPay,
  userCredits,
  verifyRazorpay,
} from "../Controllers/User.controller.js";
import AuthUser from "../MiddleWares/Auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);
userRouter.get("/credits", AuthUser, userCredits);
userRouter.post("/pay-razor", AuthUser, paymentRazorPay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;

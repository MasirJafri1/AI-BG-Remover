import express from "express";
import { clerkWebhooks, userCredits } from "../Controllers/User.controller.js";
import AuthUser from "../MiddleWares/Auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);
userRouter.get("/credits", AuthUser, userCredits);

export default userRouter;

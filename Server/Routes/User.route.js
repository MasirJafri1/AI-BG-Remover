import express from "express";
import { clerkWebhooks } from "../Controllers/User.controller.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

export default userRouter;

import express from "express";
import { removeBgImage } from "../Controllers/Image.controller.js";
import upload from "../MiddleWares/Multer.js";
import AuthUser from "../MiddleWares/Auth.js";
import Limiter from "../MiddleWares/Ratelimit.js";
// import { rmBgImg } from "../Controllers/TestForImage.js";

const imageRouter = express.Router();

imageRouter.post(
  "/remove-bg",
  Limiter,
  upload.single("image"),
  AuthUser,
  removeBgImage
);

export default imageRouter;

import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./Configs/MongoDB.js";
import userRouter from "./Routes/User.route.js";
import imageRouter from "./Routes/Image.route.js";

//App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//allowed Origins
const allowedOrigins = [
  "https://blankify-io.vercel.app",
  "http://localhost:5173",
];

//MiddleWares
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

//API Routes
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.listen(PORT, () => {
  console.log(`Server Running on http://http://localhost:${PORT}/`);
});

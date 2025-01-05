import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./Configs/MongoDB.js";
import userRouter from "./Routes/User.route.js";

//App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//MiddleWares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//API Routes
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on http://http://localhost:${PORT}/`);
});

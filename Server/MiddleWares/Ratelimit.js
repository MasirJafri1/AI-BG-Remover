import rateLimit from "express-rate-limit";

const Limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res.json({
      success: false,
      message: "You have exceeded the rate limit. Please try again later.",
    });
  },
});

export default Limiter;

import jwt from "jsonwebtoken";

// Middleware to decode jwt token to get clerk ID

const AuthUser = async (req, res, next) => {
  try {
    // console.log("Request Headers: ", req.headers); 
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized Login Again",
      });
    }

    const token_decode = jwt.decode(token);
    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default AuthUser;

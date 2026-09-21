import User from "../models/User.js";
import { verifyToken } from "../utils/jwt.js";
import { errorResponse } from "../utils/apiResponse.js";

// ==============================
// Authentication Middleware
// ==============================

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return errorResponse(res, "Unauthorized. Token missing.", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return errorResponse(res, "User not found.", 401);
    }

    req.user = user;

    next();
  } catch (error) {
    return errorResponse(res, "Invalid or expired token.", 401);
  }
};
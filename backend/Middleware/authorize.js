import { errorResponse } from "../utils/apiResponse.js";

// ==============================
// Role-Based Authorization Middleware
// ==============================

export const authorize = (...roles) => {
  return (req, res, next) => {
    // Ensure protect middleware has already run
    if (!req.user) {
      return errorResponse(res, "Unauthorized.", 401);
    }

    // Check if user's role is allowed
    if (!roles.includes(req.user.role)) {
      return errorResponse(
        res,
        "Forbidden. You do not have permission to access this resource.",
        403
      );
    }

    next();
  };
};
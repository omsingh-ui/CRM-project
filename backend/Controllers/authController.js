import {
  loginUser,
  registerUser,
  requestPasswordReset,
  resetUserPassword,
} from "../services/authService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

import { generateToken } from "../utils/jwt.js";
import { createActivity } from "../services/activityService.js";

// ==============================
// Login Controller
// ==============================

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(
        res,
        "Email and password are required.",
        400
      );
    }

    const user = await loginUser(email, password);

    if (!user) {
      return errorResponse(
        res,
        "Invalid email or password.",
        401
      );
    }

    const token = generateToken(user);

    // Activity Log
    await createActivity({
      action: "Login",
      module: "Auth",
      description: `${user.name} logged in`,
      user: user._id,
    });

    const userObject = user.toObject();
    const { password: _, ...safeUser } = userObject;

    return successResponse(
      res,
      "Login successful.",
      {
        token,
        user: safeUser,
      }
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Register Controller
// ==============================

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return errorResponse(
        res,
        "All fields are required.",
        400
      );
    }

    if (password.length < 6) {
      return errorResponse(
        res,
        "Password must be at least 6 characters long.",
        400
      );
    }

    const user = await registerUser(
      name,
      email,
      password
    );

    if (!user) {
      return errorResponse(
        res,
        "User already exists.",
        409
      );
    }

    // Activity Log
    await createActivity({
      action: "Register",
      module: "Auth",
      description: `${user.name} registered`,
      user: user._id,
    });

    const userObject = user.toObject();
    const { password: _, ...safeUser } = userObject;

    return successResponse(
      res,
      "Registration successful.",
      safeUser,
      201
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Profile Controller
// ==============================

export const profile = async (
  req,
  res,
  next
) => {
  try {
    return successResponse(
      res,
      "Profile fetched successfully.",
      req.user
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Forgot Password Controller
// ==============================

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return errorResponse(res, "Email is required.", 400);
    }

    const result = await requestPasswordReset(email);

    if (!result) {
      // Return 404 so user knows if email doesn't exist
      return errorResponse(res, "No user found with that email address.", 404);
    }

    // Activity Log
    await createActivity({
      action: "Forgot Password",
      module: "Auth",
      description: `Password reset requested for ${result.user.email}`,
      user: result.user._id,
    });

    return successResponse(
      res,
      "Password reset token generated successfully. Valid for 1 hour.",
      {
        resetToken: result.resetToken,
        email: result.user.email,
      }
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Reset Password Controller
// ==============================

export const resetPassword = async (req, res, next) => {
  try {
    const token = req.params.token || req.body.token;
    const { password } = req.body;

    if (!token) {
      return errorResponse(res, "Reset token is required.", 400);
    }

    if (!password || password.length < 6) {
      return errorResponse(
        res,
        "New password must be at least 6 characters long.",
        400
      );
    }

    const updatedUser = await resetUserPassword(token, password);

    if (!updatedUser) {
      return errorResponse(
        res,
        "Invalid or expired password reset token.",
        400
      );
    }

    // Activity Log
    await createActivity({
      action: "Reset Password",
      module: "Auth",
      description: `Password successfully reset for ${updatedUser.email}`,
      user: updatedUser._id,
    });

    return successResponse(
      res,
      "Password has been reset successfully. You can now login.",
      {
        email: updatedUser.email,
      }
    );
  } catch (error) {
    next(error);
  }
};
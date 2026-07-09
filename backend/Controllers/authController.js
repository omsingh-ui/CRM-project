import {
  loginUser,
  registerUser,
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
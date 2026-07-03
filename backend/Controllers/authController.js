import { loginUser, registerUser } from "../services/authService.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";
import { generateToken } from "../utils/jwt.js";

// ==============================
// Login Controller
// ==============================

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, "Email and password are required.", 400);
    }

    const user = await loginUser(email, password);

    if (!user) {
      return errorResponse(res, "Invalid email or password.", 401);
    }

    const token = generateToken(user);

    const userObject = user.toObject();

    const { password: _, ...safeUser } = userObject;

    return successResponse(res, "Login successful.", {
      token,
      user: safeUser,
    });
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

// ==============================
// Register Controller
// ==============================

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return errorResponse(res, "All fields are required.", 400);
    }

    if (password.length < 6) {
      return errorResponse(
        res,
        "Password must be at least 6 characters long.",
        400
      );
    }

    const user = await registerUser(name, email, password);

    if (!user) {
      return errorResponse(res, "User already exists.", 409);
    }

    const userObject = user.toObject();

    const { password: _, ...safeUser } = userObject;

    return successResponse(res, "Registration successful.", safeUser, 201);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

// ==============================
// Profile Controller
// ==============================

export const profile = (req, res) => {
  return successResponse(res, "Profile fetched successfully.", req.user);
};
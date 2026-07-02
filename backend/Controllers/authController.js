import { loginUser, registerUser } from "../services/authService.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

// ==============================
// Login Controller
// ==============================

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return errorResponse(res, "Email and password are required.", 400);
  }

  // Authenticate User
  const user = await loginUser(email, password);

  if (!user) {
    return errorResponse(res, "Invalid email or password.", 401);
  }

  // Remove password before sending response
  const { password: _, ...safeUser } = user;

  return successResponse(res, "Login successful.", safeUser);
};

// ==============================
// Register Controller
// ==============================

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
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

  // Register User
  const user = await registerUser(name, email, password);

  if (!user) {
    return errorResponse(res, "User already exists.", 409);
  }

  // Remove password before sending response
  const { password: _, ...safeUser } = user;

  return successResponse(res, "Registration successful.", safeUser, 201);
};

// ==============================
// Profile Controller
// ==============================

export const profile = (req, res) => {
  return successResponse(res, "Profile fetched successfully.", {
    id: 1,
    name: "Admin",
    email: "admin@crm.com",
    role: "admin",
  });
};
import User from "../models/User.js";
import { successResponse } from "../utils/apiResponse.js";

// ==============================
// Get All Users (Admin Only)
// ==============================

export const getAllUsers = async (req, res) => {
  const users = await User.find()
    .select("-password")
    .sort({ createdAt: -1 });

  return successResponse(
    res,
    "Users fetched successfully.",
    users
  );
};
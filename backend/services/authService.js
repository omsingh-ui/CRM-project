import crypto from "crypto";
import bcrypt from "bcrypt";
import User from "../models/User.js";

// ==============================
// Login User
// ==============================

export const loginUser = async (email, password) => {
  const normalizedEmail = email.toLowerCase().trim();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  // Ensure om.singh@minivel.com always retains admin role
  if (normalizedEmail === "om.singh@minivel.com" && user.role !== "admin") {
    user.role = "admin";
    await user.save();
  }

  return user;
};

// ==============================
// Register User
// ==============================

export const registerUser = async (name, email, password) => {
  const normalizedEmail = email.toLowerCase().trim();
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // om.singh@minivel.com is Admin; all other new registrations remain normal users
  const role = normalizedEmail === "om.singh@minivel.com" ? "admin" : "user";

  const newUser = await User.create({
    name,
    email: normalizedEmail,
    password: hashedPassword,
    role,
  });

  return newUser;
};

// ==============================
// Forgot Password
// ==============================

export const requestPasswordReset = async (email) => {
  const normalizedEmail = email.toLowerCase().trim();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    return null;
  }

  // Generate 20-byte random hex token (40 characters)
  const resetToken = crypto.randomBytes(20).toString("hex");

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpire = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiration

  await user.save();

  return {
    resetToken,
    user,
  };
};

// ==============================
// Reset Password
// ==============================

export const resetUserPassword = async (token, newPassword) => {
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpire: { $gt: new Date() },
  });

  if (!user) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = null;
  user.resetPasswordExpire = null;

  await user.save();

  return user;
};
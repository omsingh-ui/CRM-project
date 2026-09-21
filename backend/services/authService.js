import bcrypt from "bcrypt";
import User from "../models/User.js";

// ==============================
// Login User
// ==============================

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return user;
};

// ==============================
// Register User
// ==============================

export const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "user",
  });

  return newUser;
};
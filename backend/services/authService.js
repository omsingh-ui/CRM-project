import bcrypt from "bcrypt";
import users from "../data/users.js";

// ==============================
// Login User
// ==============================

export const loginUser = async (email, password) => {
  // Find user by email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return null;
  }

  // Compare entered password with hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return null;
  }

  return user;
};

// ==============================
// Register User
// ==============================

export const registerUser = async (name, email, password) => {
  // Check if email already exists
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return null;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    role: "user",
  };

  users.push(newUser);

  return newUser;
};
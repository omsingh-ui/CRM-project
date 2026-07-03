import express from "express";
import {
  login,
  register,
  profile,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public Routes
router.post("/login", login);
router.post("/register", register);

// Protected Route
router.get("/profile", protect, profile);

export default router;
import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// ==============================
// Admin Routes
// ==============================

router.get(
  "/users",
  protect,
  authorize("admin"),
  getAllUsers
);

export default router;
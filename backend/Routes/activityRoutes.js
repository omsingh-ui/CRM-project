import express from "express";

import {
  getAll,
  removeAll,
} from "../controllers/activityController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// Protect all activity routes
router.use(protect);

// ==============================
// Activity Routes
// ==============================

// Get Recent Activities
router.get("/", getAll);

// Delete All Activities
router.delete("/", removeAll);

export default router;
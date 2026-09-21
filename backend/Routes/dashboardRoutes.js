import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// ==============================
// Protect Dashboard Route
// ==============================

router.use(protect);

// ==============================
// Dashboard Route
// ==============================

router.get("/", getDashboard);

export default router;
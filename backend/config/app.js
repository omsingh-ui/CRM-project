import express from "express";
import cors from "cors";

import authRoutes from "../routes/authRoutes.js";
import errorMiddleware from "../middleware/errorMiddleware.js";

const app = express();

// ============================
// Global Middleware
// ============================

app.use(cors());
app.use(express.json());

// ============================
// Health Check
// ============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CRM Backend is running successfully 🚀",
    version: "1.1.0",
  });
});

// ============================
// Test Route
// ============================

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
  });
});

// ============================
// API Routes
// ============================

app.use("/api/auth", authRoutes);

// ============================
// Error Middleware
// ============================

app.use(errorMiddleware);

export default app;
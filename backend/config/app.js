import express from "express";
import cors from "cors";
import path from "path";

// ============================
// Route Imports
// ============================

import authRoutes from "../routes/authRoutes.js";
import customerRoutes from "../routes/customerRoutes.js";
import leadRoutes from "../routes/leadRoutes.js";
import taskRoutes from "../routes/taskRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";
import adminRoutes from "../routes/adminRoutes.js";
import activityRoutes from "../routes/activityRoutes.js";

// ============================
// Middleware Imports
// ============================

import errorMiddleware from "../middleware/errorMiddleware.js";

const app = express();

// ============================
// Global Middleware
// ============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ============================
// Static Upload Folder
// ============================

app.use(
  "/uploads",
  express.static(path.resolve("uploads"))
);

// ============================
// Health Route
// ============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CRM Backend is running successfully 🚀",
    version: "2.0.0",
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

app.use("/api/customers", customerRoutes);

app.use("/api/leads", leadRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/activity", activityRoutes);

// ============================
// 404 Handler
// ============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// ============================
// Global Error Middleware
// ============================

app.use(errorMiddleware);

export default app;
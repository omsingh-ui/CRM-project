import express from "express";
import cors from "cors";

// ============================
// Route Imports
// ============================

import authRoutes from "../routes/authRoutes.js";
import customerRoutes from "../routes/customerRoutes.js";
import leadRoutes from "../routes/leadRoutes.js";
import taskRoutes from "../routes/taskRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";

// ============================
// Middleware Imports
// ============================

import errorMiddleware from "../middleware/errorMiddleware.js";

const app = express();

// ============================
// Global Middleware
// ============================

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// ============================
// Health Check
// ============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CRM Backend is running successfully 🚀",
    version: "1.4.0",
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

// Authentication
app.use("/api/auth", authRoutes);

// Customers
app.use("/api/customers", customerRoutes);

// Leads
app.use("/api/leads", leadRoutes);

// Tasks
app.use("/api/tasks", taskRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// ============================
// 404 Route Handler
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
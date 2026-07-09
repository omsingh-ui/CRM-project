import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    // ==============================
    // Task Information
    // ==============================

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    // ==============================
    // Priority
    // ==============================

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    // ==============================
    // Status
    // ==============================

    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Completed",
      ],
      default: "Pending",
    },

    // ==============================
    // Customer Relation
    // ==============================

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      default: null,
    },

    // ==============================
    // Lead Relation
    // ==============================

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      default: null,
    },

    // ==============================
    // Attachments
    // ==============================

    attachments: [
      {
        type: String,
      },
    ],

    // ==============================
    // Owner
    // ==============================

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model(
  "Task",
  taskSchema
);

export default Task;
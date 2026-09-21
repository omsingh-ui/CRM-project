import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    // ==============================
    // Basic Information
    // ==============================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
    },

    // ==============================
    // Customer Status
    // ==============================

    status: {
      type: String,
      enum: ["Lead", "Active", "Inactive"],
      default: "Lead",
    },

    // ==============================
    // Profile Image
    // ==============================

    profileImage: {
      type: String,
      default: null,
    },

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

const Customer = mongoose.model(
  "Customer",
  customerSchema
);

export default Customer;
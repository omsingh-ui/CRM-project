import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    // ==============================
    // Customer Reference
    // ==============================

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    // ==============================
    // Lead Source
    // ==============================

    source: {
      type: String,
      enum: [
        "Website",
        "Referral",
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Other",
      ],
      default: "Other",
    },

    // ==============================
    // Lead Status
    // ==============================

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Won",
        "Lost",
      ],
      default: "New",
    },

    // ==============================
    // Notes
    // ==============================

    notes: {
      type: String,
      trim: true,
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

const Lead = mongoose.model(
  "Lead",
  leadSchema
);

export default Lead;
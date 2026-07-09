import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

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

    notes: {
      type: String,
      trim: true,
    },

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

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
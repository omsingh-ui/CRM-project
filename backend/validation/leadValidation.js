import { body, validationResult } from "express-validator";
import { errorResponse } from "../utils/apiResponse.js";

// ==============================
// Lead Validation Rules
// ==============================

export const validateLead = [
  body("customer")
    .notEmpty()
    .withMessage("Customer is required."),

  body("source")
    .optional()
    .isIn([
      "Website",
      "Referral",
      "Facebook",
      "Instagram",
      "LinkedIn",
      "Other",
    ])
    .withMessage("Invalid lead source."),

  body("status")
    .optional()
    .isIn([
      "New",
      "Contacted",
      "Qualified",
      "Won",
      "Lost",
    ])
    .withMessage("Invalid lead status."),

  body("notes")
    .optional()
    .trim(),

  // ==============================
  // Validation Result
  // ==============================

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return errorResponse(
        res,
        errors.array()[0].msg,
        400
      );
    }

    next();
  },
];
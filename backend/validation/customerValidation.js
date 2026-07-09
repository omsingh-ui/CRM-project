import { body, validationResult } from "express-validator";
import { errorResponse } from "../utils/apiResponse.js";

// ==============================
// Customer Validation Rules
// ==============================

export const validateCustomer = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Customer name is required."),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address."),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required."),

  body("status")
    .optional()
    .isIn(["Lead", "Active", "Inactive"])
    .withMessage("Invalid customer status."),

  // Final Validation Middleware
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
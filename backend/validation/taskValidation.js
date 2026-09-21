import { errorResponse } from "../utils/apiResponse.js";

// ==============================
// Validate Task
// ==============================

export const validateTask = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return errorResponse(
      res,
      "Task title is required.",
      400
    );
  }

  next();
};
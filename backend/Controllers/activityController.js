import {
  getActivities,
  deleteActivities,
} from "../services/activityService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

// ==============================
// Get Recent Activities
// ==============================

export const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 20;

    const activities = await getActivities(
      req.user._id,
      limit
    );

    return successResponse(
      res,
      "Activities fetched successfully.",
      activities
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Delete All Activities
// ==============================

export const removeAll = async (
  req,
  res,
  next
) => {
  try {
    await deleteActivities(req.user._id);

    return successResponse(
      res,
      "All activities deleted successfully."
    );
  } catch (error) {
    next(error);
  }
};
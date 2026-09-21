import { getDashboardStats } from "../services/dashboardService.js";
import { getActivities } from "../services/activityService.js";

import {
  successResponse,
} from "../utils/apiResponse.js";

// ==============================
// Dashboard Controller
// ==============================

export const getDashboard = async (
  req,
  res,
  next
) => {
  try {
    const stats = await getDashboardStats(
      req.user._id
    );

    // Latest 10 Activities
    const recentActivities =
      await getActivities(
        req.user._id,
        10
      );

    return successResponse(
      res,
      "Dashboard data fetched successfully.",
      {
        ...stats,
        recentActivities,
      }
    );
  } catch (error) {
    next(error);
  }
};
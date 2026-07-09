import { getDashboardStats } from "../services/dashboardService.js";
import { successResponse } from "../utils/apiResponse.js";

// ==============================
// Dashboard Controller
// ==============================

export const getDashboard = async (req, res) => {
  const stats = await getDashboardStats(req.user._id);

  return successResponse(
    res,
    "Dashboard data fetched successfully.",
    stats
  );
};
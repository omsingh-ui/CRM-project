import Customer from "../models/Customer.js";
import Lead from "../models/Lead.js";
import Task from "../models/Task.js";

// ==============================
// Dashboard Statistics
// ==============================

export const getDashboardStats = async (ownerId) => {
  const [
    totalCustomers,
    totalLeads,
    totalTasks,
    completedTasks,
    pendingTasks,
    overdueTasks,
  ] = await Promise.all([
    Customer.countDocuments({ owner: ownerId }),

    Lead.countDocuments({ owner: ownerId }),

    Task.countDocuments({ owner: ownerId }),

    Task.countDocuments({
      owner: ownerId,
      status: "Completed",
    }),

    Task.countDocuments({
      owner: ownerId,
      status: "Pending",
    }),

    Task.countDocuments({
      owner: ownerId,
      status: {
        $ne: "Completed",
      },
      dueDate: {
        $lt: new Date(),
      },
    }),
  ]);

  return {
    totalCustomers,
    totalLeads,
    totalTasks,
    completedTasks,
    pendingTasks,
    overdueTasks,
  };
};
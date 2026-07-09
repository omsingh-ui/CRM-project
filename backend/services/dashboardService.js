import Customer from "../models/Customer.js";
import Lead from "../models/Lead.js";
import Task from "../models/Task.js";

// ==============================
// Dashboard Statistics
// ==============================

export const getDashboardStats = async (
  ownerId
) => {
  const [
    totalCustomers,
    totalLeads,
    totalTasks,
    completedTasks,
    pendingTasks,
    overdueTasks,

    newLeads,
    contactedLeads,
    qualifiedLeads,
    wonLeads,
    lostLeads,

    pendingTaskCount,
    inProgressTasks,
    completedTaskCount,
  ] = await Promise.all([
    // Customers
    Customer.countDocuments({
      owner: ownerId,
    }),

    // Leads
    Lead.countDocuments({
      owner: ownerId,
    }),

    // Tasks
    Task.countDocuments({
      owner: ownerId,
    }),

    // Completed Tasks
    Task.countDocuments({
      owner: ownerId,
      status: "Completed",
    }),

    // Pending Tasks
    Task.countDocuments({
      owner: ownerId,
      status: "Pending",
    }),

    // Overdue Tasks
    Task.countDocuments({
      owner: ownerId,
      status: {
        $ne: "Completed",
      },
      dueDate: {
        $lt: new Date(),
      },
    }),

    // Lead Status
    Lead.countDocuments({
      owner: ownerId,
      status: "New",
    }),

    Lead.countDocuments({
      owner: ownerId,
      status: "Contacted",
    }),

    Lead.countDocuments({
      owner: ownerId,
      status: "Qualified",
    }),

    Lead.countDocuments({
      owner: ownerId,
      status: "Won",
    }),

    Lead.countDocuments({
      owner: ownerId,
      status: "Lost",
    }),

    // Task Status
    Task.countDocuments({
      owner: ownerId,
      status: "Pending",
    }),

    Task.countDocuments({
      owner: ownerId,
      status: "In Progress",
    }),

    Task.countDocuments({
      owner: ownerId,
      status: "Completed",
    }),
  ]);

  return {
    // Summary Cards
    totalCustomers,
    totalLeads,
    totalTasks,

    completedTasks,
    pendingTasks,
    overdueTasks,

    // Lead Analytics
    leadStatus: {
      New: newLeads,
      Contacted: contactedLeads,
      Qualified: qualifiedLeads,
      Won: wonLeads,
      Lost: lostLeads,
    },

    // Task Analytics
    taskStatus: {
      Pending: pendingTaskCount,
      "In Progress": inProgressTasks,
      Completed: completedTaskCount,
    },
  };
};
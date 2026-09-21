import Task from "../models/Task.js";
import { buildQuery } from "../utils/apiFeatures.js";

// ==============================
// Create Task
// ==============================

export const createTask = async (taskData) => {
  return await Task.create(taskData);
};

// ==============================
// Get All Tasks
// Search + Filter + Sort + Pagination
// ==============================

export const getTasks = async (
  ownerId,
  queryParams
) => {
  const { query, filter, page, limit } = buildQuery(
    Task,
    ownerId,
    queryParams,
    ["title", "status", "priority"]
  );

  query
    .populate("customer")
    .populate("lead");

  const tasks = await query;

  const total = await Task.countDocuments(filter);

  return {
    tasks,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// ==============================
// Get Single Task
// ==============================

export const getTaskById = async (
  taskId,
  ownerId
) => {
  return await Task.findOne({
    _id: taskId,
    owner: ownerId,
  })
    .populate("customer")
    .populate("lead");
};

// ==============================
// Update Task
// ==============================

export const updateTask = async (
  taskId,
  ownerId,
  updateData
) => {
  return await Task.findOneAndUpdate(
    {
      _id: taskId,
      owner: ownerId,
    },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  )
    .populate("customer")
    .populate("lead");
};

// ==============================
// Delete Task
// ==============================

export const deleteTask = async (
  taskId,
  ownerId
) => {
  return await Task.findOneAndDelete({
    _id: taskId,
    owner: ownerId,
  });
};
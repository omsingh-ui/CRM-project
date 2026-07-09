import Task from "../models/Task.js";

// ==============================
// Create Task
// ==============================

export const createTask = async (taskData) => {
  const task = await Task.create(taskData);

  return task;
};

// ==============================
// Get All Tasks
// ==============================

export const getTasks = async (ownerId) => {
  const tasks = await Task.find({
    owner: ownerId,
  })
    .populate("customer")
    .populate("lead")
    .sort({ dueDate: 1 });

  return tasks;
};

// ==============================
// Get Single Task
// ==============================

export const getTaskById = async (taskId, ownerId) => {
  const task = await Task.findOne({
    _id: taskId,
    owner: ownerId,
  })
    .populate("customer")
    .populate("lead");

  return task;
};

// ==============================
// Update Task
// ==============================

export const updateTask = async (
  taskId,
  ownerId,
  updateData
) => {
  const task = await Task.findOneAndUpdate(
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

  return task;
};

// ==============================
// Delete Task
// ==============================

export const deleteTask = async (
  taskId,
  ownerId
) => {
  const task = await Task.findOneAndDelete({
    _id: taskId,
    owner: ownerId,
  });

  return task;
};
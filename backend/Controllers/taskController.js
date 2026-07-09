import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../services/taskService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

// ==============================
// Create Task
// ==============================

export const create = async (req, res) => {
  const {
    title,
    description,
    dueDate,
    priority,
    status,
    customer,
    lead,
  } = req.body;

  // Validation
  if (!title || !dueDate) {
    return errorResponse(
      res,
      "Title and due date are required.",
      400
    );
  }

  const task = await createTask({
    title,
    description,
    dueDate,
    priority,
    status,
    customer,
    lead,
    owner: req.user._id,
  });

  return successResponse(
    res,
    "Task created successfully.",
    task,
    201
  );
};

// ==============================
// Get All Tasks
// ==============================

export const getAll = async (req, res) => {
  const tasks = await getTasks(req.user._id);

  return successResponse(
    res,
    "Tasks fetched successfully.",
    tasks
  );
};

// ==============================
// Get Single Task
// ==============================

export const getOne = async (req, res) => {
  const task = await getTaskById(
    req.params.id,
    req.user._id
  );

  if (!task) {
    return errorResponse(
      res,
      "Task not found.",
      404
    );
  }

  return successResponse(
    res,
    "Task fetched successfully.",
    task
  );
};

// ==============================
// Update Task
// ==============================

export const update = async (req, res) => {
  const task = await updateTask(
    req.params.id,
    req.user._id,
    req.body
  );

  if (!task) {
    return errorResponse(
      res,
      "Task not found.",
      404
    );
  }

  return successResponse(
    res,
    "Task updated successfully.",
    task
  );
};

// ==============================
// Delete Task
// ==============================

export const remove = async (req, res) => {
  const task = await deleteTask(
    req.params.id,
    req.user._id
  );

  if (!task) {
    return errorResponse(
      res,
      "Task not found.",
      404
    );
  }

  return successResponse(
    res,
    "Task deleted successfully.",
    task
  );
};
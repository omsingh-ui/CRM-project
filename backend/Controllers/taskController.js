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

import { createActivity } from "../services/activityService.js";
import deleteFile from "../utils/deleteFile.js";

// ==============================
// Create Task
// ==============================

export const create = async (req, res, next) => {
  try {
    const {
      title,
      description,
      dueDate,
      priority,
      status,
      customer,
      lead,
    } = req.body;

    if (!title || !dueDate) {
      return errorResponse(
        res,
        "Title and due date are required.",
        400
      );
    }

    const attachments = req.files
      ? req.files.map((file) => file.path)
      : [];

    const task = await createTask({
      title,
      description,
      dueDate,
      priority,
      status,
      customer,
      lead,
      attachments,
      owner: req.user._id,
    });

    await createActivity({
      action: "Created",
      module: "Task",
      description: `Created task '${task.title}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Task created successfully.",
      task,
      201
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get All Tasks
// ==============================

export const getAll = async (req, res, next) => {
  try {
    const result = await getTasks(
      req.user._id,
      req.query
    );

    return successResponse(
      res,
      "Tasks fetched successfully.",
      result
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Get Single Task
// ==============================

export const getOne = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// ==============================
// Update Task
// ==============================

export const update = async (req, res, next) => {
  try {
    const existingTask = await getTaskById(
      req.params.id,
      req.user._id
    );

    if (!existingTask) {
      return errorResponse(
        res,
        "Task not found.",
        404
      );
    }

    const updateData = {
      ...req.body,
    };

    if (req.files && req.files.length > 0) {
      if (
        existingTask.attachments &&
        existingTask.attachments.length
      ) {
        existingTask.attachments.forEach((file) =>
          deleteFile(file)
        );
      }

      updateData.attachments = req.files.map(
        (file) => file.path
      );
    }

    const task = await updateTask(
      req.params.id,
      req.user._id,
      updateData
    );

    await createActivity({
      action: "Updated",
      module: "Task",
      description: `Updated task '${task.title}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Task updated successfully.",
      task
    );
  } catch (error) {
    next(error);
  }
};

// ==============================
// Delete Task
// ==============================

export const remove = async (req, res, next) => {
  try {
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

    if (
      task.attachments &&
      task.attachments.length
    ) {
      task.attachments.forEach((file) =>
        deleteFile(file)
      );
    }

    await createActivity({
      action: "Deleted",
      module: "Task",
      description: `Deleted task '${task.title}'`,
      user: req.user._id,
    });

    return successResponse(
      res,
      "Task deleted successfully.",
      task
    );
  } catch (error) {
    next(error);
  }
};
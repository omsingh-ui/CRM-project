import express from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/taskController.js";

import { protect } from "../middleware/auth.js";
import { validateTask } from "../validation/taskValidation.js";

const router = express.Router();

// ==============================
// Protect All Task Routes
// ==============================

router.use(protect);

// ==============================
// Task Routes
// ==============================

// Create Task
router.post("/", validateTask, create);

// Get All Tasks
router.get("/", getAll);

// Get Single Task
router.get("/:id", getOne);

// Update Task
router.put("/:id", update);

// Delete Task
router.delete("/:id", remove);

export default router;
import express from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/leadController.js";

import { protect } from "../middleware/auth.js";
import { validateLead } from "../validation/leadValidation.js";

const router = express.Router();

// ==============================
// Protect All Lead Routes
// ==============================

router.use(protect);

// ==============================
// Lead Routes
// ==============================

// Create Lead
router.post("/", validateLead, create);

// Get All Leads
router.get("/", getAll);

// Get Single Lead
router.get("/:id", getOne);

// Update Lead
router.put("/:id", update);

// Delete Lead
router.delete("/:id", remove);

export default router;
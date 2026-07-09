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
import { uploadLeadAttachments } from "../middleware/upload.js";

const router = express.Router();

// ===================================
// Protect All Routes
// ===================================

router.use(protect);

// ===================================
// Lead Routes
// ===================================

// Create Lead
router.post(
  "/",
  uploadLeadAttachments.array("attachments", 10),
  validateLead,
  create
);

// Get All Leads
router.get("/", getAll);

// Get Single Lead
router.get("/:id", getOne);

// Update Lead
router.put(
  "/:id",
  uploadLeadAttachments.array("attachments", 10),
  update
);

// Delete Lead
router.delete("/:id", remove);

export default router;
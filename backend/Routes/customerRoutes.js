import express from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/customerController.js";

import { protect } from "../middleware/auth.js";
import { uploadCustomerImage } from "../middleware/upload.js";

const router = express.Router();

// ===================================
// Protect All Routes
// ===================================

router.use(protect);

// ===================================
// Customer Routes
// ===================================

// Create Customer with Profile Image
router.post(
  "/",
  uploadCustomerImage.single("profileImage"),
  create
);

// Get All Customers
router.get("/", getAll);

// Get Single Customer
router.get("/:id", getOne);

// Update Customer + Change Profile Image
router.put(
  "/:id",
  uploadCustomerImage.single("profileImage"),
  update
);

// Delete Customer
router.delete("/:id", remove);

export default router;
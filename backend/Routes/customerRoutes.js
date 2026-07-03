import express from "express";
import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/customerController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Protect all customer routes
router.use(protect);

// Customer Routes
router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
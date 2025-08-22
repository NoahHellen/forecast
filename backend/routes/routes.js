import express from "express";
import {
  createRow,
  deleteRow,
  getRow,
  getTimeSeries,
  updateRow,
} from "../controllers/data_controller.js";

// Build server router.
const router = express.Router();

// Routes to controllers.
router.get("/time-series", getTimeSeries);
router.get("/time-series/:id", getRow);
router.post("time-series/:id", createRow);
router.put("/time-series/:id", updateRow);
router.delete("/time-series/:id", deleteRow);

export default router;

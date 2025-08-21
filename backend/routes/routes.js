import express from "express";
import { getTimeSeries } from "../controllers/data_controller.js";

// Build server router.
const router = express.Router();

// Routes to controllers.
router.get("/dataset", getTimeSeries);

export default router;

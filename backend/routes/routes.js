import express from "express";
import { getDataSet } from "../controllers/data_controller.js";

const router = express.Router();

router.get("/dataset", getDataSet);

export default router;

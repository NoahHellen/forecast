import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { pool } from "./database/database.js";
import router from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware.
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));

// API.
app.use("/api", router);

// Database.
async function initDatabase() {
  try {
    await pool.query(`
			CREATE TABLE IF NOT EXISTS time_series (
				date TIMESTAMP PRIMARY KEY,
				price NUMERIC(5,2)
			)
		`);
    console.log("Database initialised successfully");
  } catch (error) {
    console.log("Error in initDatabase function", error);
  }
}

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});

import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { rdsConnection } from "./databases/database.js";
import router from "./routes/routes.js";

// Load environment variables
dotenv.config();

// Build the server.
const app = express();

// Configure server port.
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing.
app.use(express.json());

// Middleware for CORS.
app.use(cors());

// Middleware for security.
app.use(helmet({ contentSecurityPolicy: false }));

// Middleware to log HTTP requests.
app.use(morgan("dev"));

// Base url for API routes.
app.use("/api", router);

// Initialise RDS database.
async function initDatabase() {
  try {
    await rdsConnection.query(`
			CREATE TABLE IF NOT EXISTS time_series (
        id SERIAL PRIMARY KEY,
				date TIMESTAMP,
				price NUMERIC(5,2)
			)
		`);
    console.log("Database initialised successfully");
  } catch (error) {
    console.log("Error in initDatabase function", error);
  }
}

// Start server once database initialised.
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});

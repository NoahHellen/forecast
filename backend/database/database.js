import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

export const pool = new Pool({
  user: PGUSER,
  database: PGDATABASE,
  port: PGPORT,
  host: PGHOST,
  password: PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

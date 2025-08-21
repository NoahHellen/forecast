import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { rdsConnection } from "../databases/database.js";

// Read and load apple data.
const appleData = parse(fs.readFileSync(path.resolve("seeds/apple.csv")), {
  columns: true,
  skip_empty_lines: true,
});

// // Correct date format.
function convertDate(date) {
  if (!date) return null;
  const [month, day, year] = date.split("/");
  return `${year}-${month}-${day}`;
}

// Seed RDS database.
async function seedDatabase() {
  try {
    for (const row of appleData) {
      await rdsConnection.query(
        `INSERT INTO time_series (date, price) VALUES ($1, $2)`,
        [convertDate(row.date), row.price]
      );
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
}

seedDatabase();

import { pool } from "../database/database.js";

export const getDataSet = async (req, res) => {
  try {
    const dataSet = await pool.query(`
			SELECT * FROM time_series
			ORDER BY date DESC
		`);
    console.log("Fetch data set", dataSet);
    res.status(200).json({ success: true, data: dataSet });
  } catch (error) {
    console.error("Error fetching data set", error);
  }
};

import { rdsConnection } from "../databases/database.js";

// Get all time series data from RDS.
export const getTimeSeries = async (req, res) => {
  try {
    const timeSeries = await rdsConnection.query(`
			SELECT * FROM time_series
			ORDER BY date DESC
		`);
    console.log("Time series data set fetched succesfully");
    res.status(200).json({ success: true, data: timeSeries.rows });
  } catch (error) {
    console.error("Error fetching data set", error);
  }
};

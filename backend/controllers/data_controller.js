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

// Create row in RDS.
export const createRow = async (req, res) => {
  const { date, price } = req.body;
  if (!date || !price) {
    return res
      .status(400)
      .json({ succes: false, message: "All fields are required" });
  }
  try {
    const newRow = await rdsConnection.query(`
      INSERT INTO time_series (date, price)
      VALUES (${date}, ${price})
      RETURNING *
      `);
    res.status(201).json({ success: true, data: newRow[0] });
  } catch (error) {
    console.log("Error in createRow function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get a single row from RDS.
export const getRow = async (req, res) => {
  const { id } = req.params;
  try {
    const row = await rdsConnection.query(`
      SELECT * FROM time_series WHERE date_id = ${id}
    `);
    if (!row[0]) {
      return res.status(404).json({ success: false, message: "Row not found" });
    }
    res.status(200).json({ success: true, data: row[0] });
  } catch (error) {
    console.error("Error in getRow function: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update row in RDS.
export const updateRow = async (req, res) => {
  const { id } = req.params;
  const { date, price } = req.body;

  try {
    const row = await rdsConnection.query(`
      UPDATE time_series
      SET date=${date}, price=${price}
      WHERE id=${id}
      RETURNING *
    `);

    if (row.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Row not found",
      });
    }

    res.status(200).json({ success: true, data: row[0] });
  } catch (error) {
    console.log("Error in updateRow function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Delete row in RDS.
export const deleteRow = async (req, res) => {
  const { id } = req.params;

  try {
    const row = await sql`
      DELETE FROM time_series WHERE id=${id} RETURNING *
    `;

    if (row.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Row not found",
      });
    }

    res.status(200).json({ success: true, data: row[0] });
  } catch (error) {
    console.log("Error in deleteRow function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

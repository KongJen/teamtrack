const pool = require("../src/db/db");

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected! Server time:", res.rows[0].now);
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
})();

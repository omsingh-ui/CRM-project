import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config();

import app from "./config/app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Connect Database
await connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
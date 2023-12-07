require('dotenv').config();
import express from "express";
import initRoutes from "./routes";

const app = express();

// Defining routes
initRoutes(app);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app; // Export for testing
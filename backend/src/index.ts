require('dotenv').config();
import express from "express";

const listController = require('./controller/listController');

const app = express();

if (!process.env.NYT_API_KEY) {
    throw new Error("NYT_API_KEY environment variable not set!")
}
// Defining routes
app.get('/list-names', listController);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app; // Export for testing
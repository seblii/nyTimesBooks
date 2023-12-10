require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import cors from 'cors';
const swaggerConfig = require('../config/swaggerConfig');
import express from "express";
const morgan = require('morgan');
import routes from "./routes";

const app = express();

app.use(cors());

const loggingMode = process.env.NODE_ENV == "dev" ? "dev" : "combined";
app.use(morgan(loggingMode));

// Intializing app routes
routes.forEach(route => {
    if (route.method == 'get') {
        app.get(route.path, route.controller);
    }
})

// Dev-time routes
if (process.env.NODE_ENV == "dev") {
    const swaggerSpec = swaggerJsdoc(swaggerConfig);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app; // Export for testing
require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../config/swaggerConfig');
import express from "express";
import routes from "./routes";

const app = express();

// Intializing app routes
routes.forEach(route => {
    if (route.method == 'get') {
        app.get(route.path, route.controller);
    } // TODO: Othee methods
})

// Dev-time routes
const swaggerSpec = swaggerJsdoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app; // Export for testing
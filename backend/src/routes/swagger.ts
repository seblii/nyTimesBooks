import { Express } from 'express';
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../../config/swaggerConfig');

// Swagger UI in dev mode
export default (app: Express) => {
    const swaggerSpec = swaggerJsdoc(swaggerConfig);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
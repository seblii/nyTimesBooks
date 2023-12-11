import { Express } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const devRoutes = (app: Express) => {
    if (process.env.NODE_ENV !== "dev") return;
    const swaggerConfig = require('../../config/swaggerConfig');
    const swaggerSpec = swaggerJsdoc(swaggerConfig);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default devRoutes;
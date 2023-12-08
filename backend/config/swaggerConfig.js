const swaggerDefinition = {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'NY Times bestsellers', 
      version: '1.0.0',
      description: 'Simplified API to explore NY Times bestsellers',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    // Add other global level specifications like security definitions
  };
  
const swaggerConfig = {
    swaggerDefinition,
    apis: ['./src/controller/*.ts'], 
};

module.exports = swaggerConfig;
  
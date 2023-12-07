const YAML = require('yamljs')
const fs = require('fs')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerConfig = require('../config/swaggerConfig');

const path = process.argv[2];
const openAPISpecification = swaggerJsdoc(swaggerConfig);
fs.writeFileSync(path, YAML.stringify(openAPISpecification));
import path from 'path';
const yaml_config = require('node-yaml-config');

const config = yaml_config.load(path.join(__dirname, '../../config/common.yml'));
export type LoggerConfig = typeof config.logger;
export type LoggerLevels = typeof config.logger.levels;

export default config;

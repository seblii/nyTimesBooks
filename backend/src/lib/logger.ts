const bunyan = require('bunyan');
import { LogLevel, Stream } from 'bunyan';
import { LoggerConfig, LoggerLevels } from './config';

/**
 * @param {Object} config Logger configuration
 */
export default (config: LoggerConfig) => {
  const bunyanConfig: Stream[] = [];
  const levels: LoggerLevels = Object.keys(config.levels);

  levels.forEach((level: LogLevel) => {
    const bunyanLevel = config.levels[level];
    if (!bunyanLevel) return;

    if (level === 'debug' && config.level !== 'debug') return;

    const logger: Stream = { level };

    if (bunyanLevel === 'STDOUT') {
      logger.stream = process.stdout;
    } else if (bunyanLevel === 'STDERR') {
      logger.stream = process.stderr;
    } else if (bunyanLevel) {
      logger.path = bunyanLevel;
    } else {
      return;
    }

    bunyanConfig.push(logger);
  });

  return bunyan.createLogger({ name: config.name, streams: bunyanConfig });
};

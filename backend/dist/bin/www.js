#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const api_1 = __importDefault(require("../api"));
const http = require('http');
const config_1 = __importDefault(require("../lib/config"));
const logger_1 = __importDefault(require("../lib/logger"));
const log = (0, logger_1.default)(config_1.default.logger);
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config_1.default.api.port || '3000');
api_1.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(api_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            log.fatal(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            log.fatal(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    if (!addr) {
        throw new Error('Server port to use is not defined.');
    }
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    log.debug(`Listening on ${bind}`);
}

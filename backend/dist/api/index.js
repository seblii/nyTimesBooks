"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config_1 = __importDefault(require("../lib/config"));
const logger_1 = __importDefault(require("../lib/logger"));
const log = (0, logger_1.default)(config_1.default.logger);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
/*
 * Routes
 */
app.use('/listNames', require('./routes/listNames'));
app.use('/bestsellers', require('./routes/bestsellers'));
// TODO: Add swagger api-documentation
// catch 404
app.use((req, res, next) => {
    log.error(`Error 404s on ${req.url}.`);
    res.status(404).send({ status: 404, error: 'Not found' });
});
// catch errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.error || err.message;
    log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
    res.status(status).send({ status, error: msg });
});
exports.default = app;

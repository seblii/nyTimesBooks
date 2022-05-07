import { NextFunction, Request, Response } from 'express';
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import config from '../lib/config';
import logger from '../lib/logger';

const log = logger(config.logger);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req: Request, res: Response, next: NextFunction) {
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
app.use((req: Request, res: Response, next: NextFunction) => {
  log.error(`Error 404s on ${req.url}.`);
  res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).send({ status, error: msg });
});


export default app;

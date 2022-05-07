import { NextFunction, Request, Response } from 'express';
const express = require('express');
import bestsellers from '../services/bestsellers';

const router = express.Router();

/**
 * Returns topsellers book by list name.
 */
router.get('/:list_name_encoded', async (req: Request, res: Response, next: NextFunction) => {
  const options = {
    list_name_encoded: req.params['list_name_encoded']
  };
  try {
    const result = await bestsellers.getBestsellersByListName(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

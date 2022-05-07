import express, { NextFunction, Request, Response } from 'express';
import listNames from '../services/listNames';

const router = express.Router();


/**
 * Returns a list of book categories.
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await listNames.getListNames();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    console.log(err)
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

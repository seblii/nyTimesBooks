import { NextFunction, Request, Response } from 'express';
import reviews from '../services/reviews';
const express = require('express');

const router = express.Router();

/**
 * Returns review by primary isbn.
 */
router.get('/:isbn', async (req: Request, res: Response, next: NextFunction) => {
    const options = {
        isbn: parseInt(req.params['isbn']),
    };
    try {
        const result = await reviews.getReviewsByISBN(options);
        res.status(result.status || 200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});

module.exports = router;

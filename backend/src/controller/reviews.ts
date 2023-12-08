import { Request, Response } from 'express';
import BestellersService from '../service/BestsellersService';
/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: URL to review
 *         byline:
 *           type: string
 *           description: Review's editor
 *         summary:
 *           type: string
 *           description: Summary of the review
  */
/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Retrieve books from a specified best-seller list
 *     parameters:
 *       - in: query
 *         name: isbn
 *         required: true
 *         description: The International Standard Book Number of the book to fetch reviews for.
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: An array of book reviews.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad request. This can occur if the 'isbn' parameter is missing, empty, or in an invalid format.
 */
export default async (req: Request, res: Response) => {
    const { isbn } = req.query;
    if (!isbn) {
        res.status(400).send("400: 'isbn' paramater missing");
        return;
    }

    const reviewRefs = await new BestellersService(
        process.env.NYT_API_KEY!!
    ).getBookReviewReferences(parseInt(isbn as string));

    res.send(reviewRefs);
};
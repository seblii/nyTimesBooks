import { Request, Response } from "express";
import BestellersService from "../service/BestsellersService";
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         primary_isbn10:
 *           type: string
 *           description: The 10-digit International Standard Book Number, unique to each edition of the book.
 *         primary_isbn13:
 *           type: string
 *           description: The 13-digit International Standard Book Number, a longer version of ISBN10, also unique to each edition.
 *         title:
 *           type: string
 *           description: The official title of the book, as recognized by publishers and libraries.
 *         author:
 *           type: string
 *           description: The full name(s) of the author(s) who wrote the book, possibly including co-authors.
 *         book_image:
 *           type: string
 *           description: The URL of the book cover image, expected to be in standard web formats (like JPEG or PNG) with clear resolution.
 */
/**
 * @swagger
 * /category:
 *   get:
 *     summary: Retrieve books from a specified best-seller list
 *     parameters:
 *       - in: query
 *         name: encodedListName
 *         required: true
 *         description: The encoded name (in a specific format) of the best-seller list from which books are to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A successful response returning an array of books from the specified best-seller list. Each book contains details like title, author, and ISBN.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request. This can occur if the 'encodedListName' parameter is missing, empty, or in an invalid format.
 */
export default async (req: Request, res: Response) => {
    const { encodedListName } = req.query;
    if (!encodedListName) {
        res.status(400).send("400: 'encodedListName' paramater missing");
        return;
    }
    const books = await new BestellersService(
        process.env.NYT_API_KEY!!
    ).getBestsellersOfCategory(encodedListName as string);

    res.send(books);
};

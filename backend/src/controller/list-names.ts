import { Request, Response } from 'express';
import BestellersService from '../service/BestsellersService';
/**
* @swagger
* components:
*   schemas:
*     BookCategory:
*       type: object
*       properties:
*         list_name:
*           type: string
*           description: Internal name for the list
*         display_name:
*           type: string
*           description: Display name for the list
*         list_name_encoded:
*           type: string
*           description: URL-encoded name for the list
*/
/**
* @swagger
* /list-names:
*  get:
*      summary: Request best seller books list names
*      responses: 
*          200:
*              description: List of book category names
*              content:
*                  application/json:
*                      schema:
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/BookCategory'
*/
export default async (req: Request, res: Response) => {
    const lists = await new BestellersService(
        process.env.NYT_API_KEY!!
    ).getBooklists();

    res.send(lists);
}
import { getBooklists } from "../service/bestsellers";
import { Express } from 'express';
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
export default (app: Express) => {
    if (!process.env.NYT_API_KEY) {
        throw new Error("NYT_API_KEY environment variable not set!")
    }
    app.get('/list-names', getBooklists);
}
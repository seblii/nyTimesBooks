import { Request, Response } from 'express';
import { DefaultService } from "../api";

export const getBooklists = async (req: Request, res: Response) => {
    const rawResponse = await DefaultService.getListsNamesFormat(process.env.NYT_API_KEY!!);

    const categories = rawResponse.results?.map(({list_name, display_name, list_name_encoded}) => {
        return {list_name, display_name, list_name_encoded} 
    })

    res.send(categories);
}

export const getBestsellersOfCategory = async (req: Request, res: Response) => {
    const { encodedListName } = req.query;

    // Assert required parameters
    if (!encodedListName) {
        res.status(400).send('400: encodedListName paramater missing');
        return;
    }

    const rawResponse = await DefaultService.getListsDateListJson("current", encodedListName as string, process.env.NYT_API_KEY!!);

    const booklist = rawResponse.results?.books?.map(({rank, title, author, primary_isbn10, primary_isbn13, book_image, }) => {
        return {rank, title, author, primary_isbn10, primary_isbn13, book_image, };
    })
    res.send(booklist);
}

module.exports = { getBooklists, getBestsellersOfCategory };
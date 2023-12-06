import { Request, Response } from 'express';
import { DefaultService } from "../api";

export const getBooklists = async (req: Request, res: Response) => {
    const listnames = await DefaultService.getListsNamesFormat(process.env.NYT_API_KEY!!);

    const bestsellerLists = listnames.results?.map(({list_name, display_name, list_name_encoded}) => {
        return {list_name, display_name, list_name_encoded} 
    })

    res.send(bestsellerLists);
}

module.exports = { getBooklists };
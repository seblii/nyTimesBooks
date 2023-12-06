import { Request, Response } from 'express';
import { DefaultService } from "../api";

export const getBooklists = async (req: Request, res: Response) => {
    const listnames = await DefaultService.getListsFormat(process.env.NYT_API_KEY!!);
    res.send(listnames);
}

module.exports = { getBooklists };
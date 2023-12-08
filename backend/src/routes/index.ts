import { Express, Request, Response } from 'express';
import listNamesController from '../controller/list-names';
import bestSellersListController from '../controller/best-sellers-list';

type Route = {
    path: string;
    method: 'get'; // TODO: other methods
    controller: (req: Request, res: Response) => void;
}

const routes: Route[] = [
    {
        path: '/list-names',
        method: 'get',
        controller: listNamesController
    },
    {
        path: '/category',
        method: 'get',
        controller: bestSellersListController
    },
];

export default routes;

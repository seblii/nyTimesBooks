import { Express, Request, Response } from 'express';
import listNamesController from '../controller/list-names';
import bestSellersListController from '../controller/best-sellers-list';
import reviewsController from '../controller/reviews';

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
    {
        path: '/reviews',
        method: 'get',
        controller: reviewsController
    },
];

export default routes;

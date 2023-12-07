import { Express } from 'express';
import listNames from './list-names';
import swagger from './swagger';
import bestSellersList from './best-sellers-list';



export const initRoutes = (app: Express) => {
    listNames(app);
    bestSellersList(app);
    swagger(app);
}

export default initRoutes;
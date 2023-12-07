import { Express } from 'express';
import listNames from './list-names';
import swagger from './swagger';


export const initRoutes = (app: Express) => {
    listNames(app);
    swagger(app);
}

export default initRoutes;
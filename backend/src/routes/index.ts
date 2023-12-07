import { Express } from 'express';
import listNames from './list-names';

export const initRoutes = (app: Express) => {
    listNames(app);
}

export default initRoutes;
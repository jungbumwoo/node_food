import express from 'express';
import routes from '../route';
import { user, home, getjoin, postjoin } from '../controllers/usercontroller';

const globalRouter = express.Router();

globalRouter.get(routes.user, user);
globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

export default globalRouter;

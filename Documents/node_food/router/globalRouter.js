import express from 'express';
import routes from '../route';
import { user, home } from '../controllers/usercontroller';

const globalRouter = express.Router();

globalRouter.get(routes.user, user);
globalRouter.get(routes.home, home);

export default globalRouter;

import express from 'express';
import routes from '../route';
import { upload, list } from '../controllers/foodcontroller';

const foodRouter = express.Router();

foodRouter.get(routes.upload, upload);
foodRouter.get(routes.list, list);

export default foodRouter;

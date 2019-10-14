import express from 'express';
import routes from '../route';
import { food, fileUpload, list, postUpload, foodDetail } from '../controllers/foodcontroller';
import { foodUpload } from '../middlewares';

const foodRouter = express.Router();

foodRouter.get(routes.home, food);

foodRouter.get(routes.fileUpload, fileUpload);
foodRouter.post(routes.uploadFood, foodUpload, postUpload);

foodRouter.get(routes.foodDetail(), foodDetail);
foodRouter.get(routes.list, list);

export default foodRouter;

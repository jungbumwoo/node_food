import express from 'express';
import routes from '../route';
import { food, fileUpload, list, postUpload, foodDetail } from '../controllers/foodcontroller';
import { foodUpload } from '../middlewares';

const router = express.Router();

router.get(routes.home, food);

router.get(routes.fileUpload, fileUpload);
router.post(routes.uploadFood, foodUpload, postUpload);

router.get(routes.foodDetail(), foodDetail);
// router.get('/:id', foodDetail);

router.get(routes.list, list);

export default router;

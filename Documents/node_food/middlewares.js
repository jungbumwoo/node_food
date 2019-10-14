import routes from './route';
import multer from 'multer';

const multerFood = multer({ dest: 'uploads/food' });

export const middlewareRoutes = (req, res, next) => {
	res.locals.routes = routes;
	next();
};

export const middlewareReady = (req, res, next) => {
	next();
};

export const foodUpload = multerFood.single('foodfile');

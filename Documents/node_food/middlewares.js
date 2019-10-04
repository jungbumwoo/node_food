import routes from './route';

export const middlewareRoutes = (req, res, next) => {
	res.locals.routes = routes;
	next();
};

export const middlewareReady = (req, res, next) => {
	next();
};

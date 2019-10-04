import routes from './route';

export const middlewareRoutes = (req, res, next) => {
	res.locals.routes = routes;
	next();
};

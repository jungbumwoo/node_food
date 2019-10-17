import express from 'express';
import routes from '../route';
import passport from 'passport';
import { user, home, getjoin, postjoin, login } from '../controllers/usercontroller';

const globalRouter = express.Router();

globalRouter.get(routes.user, user);
globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(
	'/login',
	passport.authenticate('local', {
		function(req, res) {
			// If this function gets called, authentication was successful.
			// `req.user` contains the authenticated user.
			res.redirect('/users/' + req.user.username);
		},
		failureRedirect: '/login',
		failureFlash: 'Invalid username or password.'
	})
);

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

export default globalRouter;

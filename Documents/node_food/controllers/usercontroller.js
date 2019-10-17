import routes from '../route';
import User from '../model/User';

export const home = (req, res) => {
	res.render('home');
};

export const user = (req, res) => {
	res.render('user');
};

export const getjoin = async (req, res) => {
	res.render('join');
};

export const login = async (req, res) => {
	res.render('login');
};

export const postjoin = async (req, res) => {
	const { body: { name, email, password, password2 } } = req;
	if (password !== password2) {
		res.status(400);
	} else {
		try {
			const user = await User({
				name,
				email
			});
			console.log(user);
			await User.register(user, password);
		} catch (error) {
			console.log(error);
		}
		// To Do: Log user in``
		res.redirect(routes.home);
	}
};

export const userDetail = (req, res) => {
	res.render('userDetail');
};

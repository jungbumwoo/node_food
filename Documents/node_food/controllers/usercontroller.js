import routes from '../route';

export const home = (req, res) => {
	res.render('home');
};

export const user = (req, res) => {
	res.render('user');
};

export const getjoin = async (req, res) => {
	res.render('join');
};

export const postjoin = (req, res) => {
	const { body: { name, email, password, password2 } } = req;
	if (password !== password2) {
		res.status(400);
	} else {
		//To Do : Register User
		//To Do : Log user in
		res.redirect(routes.home);
	}
};

export const userDetail = (req, res) => {
	res.render('userDetail');
};

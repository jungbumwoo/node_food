import Food from '../model/Food';
import routes from '../route';

export const food = async (req, res) => {
	try {
		const foods = await Food.find({});
		console.log(foods);
		res.render('food', { foods });
	} catch (error) {
		console.log(error);
		res.render('food', { foods: [] });
	}
};

export const fileUpload = (req, res) => {
	res.render('fileUpload');
};

export const list = (req, res) => {
	res.render('list');
};

export const postUpload = async (req, res) => {
	const { body: { title, description }, file: { path } } = req;

	const newFood = await Food.create({
		fileUrl: path,
		title,
		description
	});
	console.log(newFood);
	res.redirect(routes.foodDetail(newFood.id));
};

export const foodDetail = (req, res) => {
	res.render('foodDetail');
};

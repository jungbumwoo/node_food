export const food = (req, res) => {
	res.render('food');
};

export const fileUpload = (req, res) => {
	res.render('fileUpload');
};

export const list = (req, res) => {
	res.render('list');
};

export const postUpload = (req, res) => {
	const { file: { path } } = req;
	console.log(path);
	res.send('Uploaded! :' + req.file);
	console.log(req.file);
};

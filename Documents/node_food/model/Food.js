import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: 'File URL is required'
	},
	title: {
		type: String,
		required: 'title is required'
	},
	description: String,
	view: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	store: {
		type: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
});

const model = mongoose.model('Food', FoodSchema);

export default model;

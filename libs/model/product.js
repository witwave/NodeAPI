var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Article
var Images = new Schema({
	kind: {
		type: String,
		enum: ['thumbnail', 'detail'],
		required: true
	},
	url: { type: String, required: true }
});

var Product = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	description: { type: String, required: true },
	images: [Images],
	modified: { type: Date, default: Date.now }
});

Product.path('title').validate(function (v) {
	return v.length > 5 && v.length < 70;
});

module.exports = mongoose.model('Product', Product);
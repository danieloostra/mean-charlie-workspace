var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
	name: String
});

var Mongoose = mongoose.model('Mongoose', MongooseSchema);
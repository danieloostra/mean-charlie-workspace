var mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		max: 20,
		required: [true, "Must enter an email!"],
		},
});
var User = mongoose.model('User', UserSchema);
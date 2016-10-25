var mongoose = require('mongoose');
var User = mongoose.model('User');
function UsersController() {
	this.index = function(req, res) {
		User.find({}, function(err, users) {
			if (err) {
				console.log("Can't find Users!");
			}
			else {
				res.json(users);
			}
		})
	}
	this.login = function(req, res) {
		console.log("Server Controller:", req.body);
	}
	this.create = function(req, res) {
		console.log("Users Controller:", req.body);
		var user = new User({email:req.body.email, first_name:req.body.first_name, last_name:req.body.last_name, password:req.body.password, birthday:req.body.birthday})
		user.save(function(err, newUser) {
			if(err) {
				console.log(err);
				res.json(err);
			}
			else {
				res.json(newUser);
			}
			// res.send()
		})
	}
}
module.exports = new UsersController;
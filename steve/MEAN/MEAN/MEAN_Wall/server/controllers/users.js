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
		User.findOne({username: req.body.username}, function (err, data) {
			if (err  != null) {
				var user = new User({username: req.body.username})
				user.save(function(err, newUser) {
					console.log(err.name);
					console.log(newUser);
				})
			}
			else  {
				res.json(req.body.username);
			}
		})
	}
}
module.exports = new UsersController;
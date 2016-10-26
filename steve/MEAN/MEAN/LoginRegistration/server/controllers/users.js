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
		console.log(req.body.email);
		User.findOne({email: req.body.email}, function(err, data) {
				console.log(err);
				if (err) {
					console.log(err);
					res.json({
						errors: {
							login_reg: {
								message: "user name invalid"
							}
						}
					})
				} else if (data && data.validPassword(req.body.password)) {
					res.json({
						_id: data._id
					});
				} else {
					res.json({
						errors: {
							login_reg: {
								message: "invalid"
							}
						},
						name: "Validation Errors"
					})
				}
		})
	}
	this.create = function(req, res) {
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
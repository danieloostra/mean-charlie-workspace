var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.login = function(req, res) {
		
	}
	this.register = function(req, res) {
		var newUser = new User();
		newUser.first_name = req.body.firstName;
		newUser.last_name = req.body.lastName;
		newUser.email = req.body.email;
		newUser.birthday = req.body.birthday;
		newUser.password = req.body.password;
		newUser.save((err, user) => {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				console.log(user);
				res.json(user);
			}
		})
	}
}

module.exports = new UsersController();
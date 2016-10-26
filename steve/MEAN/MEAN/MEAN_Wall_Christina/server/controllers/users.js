var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	register: function(request, response){
		User.create(request.body, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	},
	login: function(request, response){
		User.findOne({email: request.body.email}, function(err, user){
			if(err){
				response.json({message: 'Wrong Login Credentials'});
			}
			else if(user && user.validPassword(request.body.password)){
				console.log('password matched')
				response.json(user);
			}
			else{
				console.log(err)
				response.json({message: 'Wrong Login Credentials'})
			}
		})
	},
	index: function(request, response){
		User.get({}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	},
	one: function(request, response){
		User.findOne({_id: request.params.id}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	} 
}
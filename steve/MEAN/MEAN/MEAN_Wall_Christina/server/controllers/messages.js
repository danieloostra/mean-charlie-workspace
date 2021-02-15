var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');
var Comment = mongoose.model('comment');

module.exports = {
	new: function(request, response){
		Message.create(request.body, function(err, message){
			if(err){
				response.json(err);
			}
			else{
				response.json(message);
			}
		})
	},
	get: function(request, response){
		Message.find({})
		.populate('_user')
		.populate({path: 'comment', model: 'comment', populate: {path:'_user', model: 'User'}})
		.exec(function(err, message){
			if(err){
				response.json(err);
			}
			else{
				response.json(message);
			}
		})
	}
}
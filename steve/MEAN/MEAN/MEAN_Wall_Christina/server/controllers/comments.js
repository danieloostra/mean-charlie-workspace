var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');
var Comment = mongoose.model('comment');

module.exports = {
	new: function(request, response){
		//-------request.body == comment[index]----//
		Message.findOne({_id: request.body._message._id}, function(err, message){
			var comment = new Comment(request.body);
			comment.save(function(err){
				if(err){
					response.json(err);
				}
				else{
					message.comment.push(comment);
					message.save(function(err){
						if(err){
							response.json(err);
						}
						else{
							//----comment == new comment object-----//
							response.json(comment);
						}
					})
				}

			})
		})
	},

}
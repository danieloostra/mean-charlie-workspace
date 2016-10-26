var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var CommentSchema = new mongoose.Schema({
	_user: {
		type: ObjectId, 
		ref: 'user'
	},
	_message: {
		type: ObjectId, 
		ref: 'Message'
	},
	comment: {
		type: String,
		required: [true, 'You cannot send comment without text']
	}
}, {timestamps: true});

mongoose.model('comment', CommentSchema)
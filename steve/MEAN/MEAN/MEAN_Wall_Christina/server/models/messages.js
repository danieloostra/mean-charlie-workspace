var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var MessageSchema = new mongoose.Schema({
	_user: {
		type: ObjectId,
		ref: 'User'
	},
	message: {
		type: String,
		required: [true, 'You cannot send message without text']
	},
	comment: [{type: ObjectId, ref: 'comment'}]
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
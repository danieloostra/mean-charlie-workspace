console.log('loading friends model');
var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    dob: Date
}, {timestamps: true});
mongoose.model('Friend', FriendSchema);

var mongoose = require('mongoose');
var MuppetSchema = new mongoose.Schema({
    name: String,
    color: String,
    type: String
}, {timestamps: true});
var Muppet = mongoose.model('Muppet', MuppetSchema);

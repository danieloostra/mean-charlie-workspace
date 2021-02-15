var mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: [true, "Must enter an email!"],
		},
	first_name: {
		type: String,
		required: [true, "Must enter a first name!"],
		},
	last_name: {
		type: String,
		required: [true, "Must enter a last name!"],
		},
	password: {
		type: String,
		required: [true, "Must enter a password!"],
		},
	
	birthday: {
		type: Date,
		required: [true, "Must enter a birthday!"]
		},
}, {timestamps: true})

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});


var User = mongoose.model('User', UserSchema);

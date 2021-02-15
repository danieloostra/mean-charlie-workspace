var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;
var bcrypt = require('bcryptjs')


var UserSchema = new mongoose.Schema({
	first_name: {
		type: String, 
		required: [true, 'First name is required'], 
		trim: true,
	},
	last_name: {
		type: String, 
		required: [true, 'Last name is required'],
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: [8, 'Password must be greater than 8 characters'],
		maxlength: [32, 'Password must be less than 32 characters'],
		validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
			},
			message: 'Password failed validation, you must have at least 1 number, uppercase and sepcial character'
		}
	},
	email: {
		type: String,
		required: [true, 'Email is required']
	},
	bday: {
		type: Date, 
		required: [true, 'Birthday is required']
	}
}, {timestamps: true});

UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done){
	this.password = this.generateHash(this.password);
	done();
})

mongoose.model('User', UserSchema);
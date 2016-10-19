var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
	show: (req, res) => {
		Mongoose.find({}, (err, mongooses) => {
			if (err) {
				console.log('Error getting mongooses!');
			} else {
				res.render('index', {mongooses: mongooses});
			}
		});
	},
	showOne: (req, res) => {
		Mongoose.find({_id: req.params.id}, (err, mongoose) => {
			if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
				if (err) {
					console.log('Error getting ID!');
					console.log(err)
				} else {
					res.render('specific', {mongoose: mongoose});
				}
			} else {
				console.log(req.params.id)
			}
		});
	},
	editOne: (req, res) => {
		Mongoose.find({_id: req.params.id}, (err, mongoose) => {
			if (err) {
				console.log("Hello?");
			} else {
				res.render('edit', {mongoose: mongoose});
			}
		});
	},
	removeOne: (req, res) => {
		Mongoose.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log('Error destroying!');
			} else {
				res.redirect('/');
			}
		});
	},
	create: (req, res) => {
		var newmongoose = new Mongoose();
		newmongoose.name = req.body.name;
		newmongoose.save( (err) => {
			if (err) {
				console.log("Error saving!");
			} else {
				res.redirect('/');
			}
		});
	},
	update: (req, res) => {
		Mongoose.update({_id: req.params.id}, {name: req.body.name}, (err) => {
			if (err) {
				console.log("Error editing!");
			} else {
				res.redirect('/');
			}
		});
	}
}
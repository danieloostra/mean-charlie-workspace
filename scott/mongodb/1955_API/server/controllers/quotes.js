var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
	showAll: (req, res) => {
		Person.find({}, (err, people) => {
			if (err) {
				console.log('Error getting people!');
			} else {
				res.json(people);
			}
		});
	},
	add: (req, res) => {
		console.log(req.params.name);
		var newPerson = new Person();
		newPerson.name = req.params.name;
		newPerson.save((err) => {
			if (err) {
				console.log('Error saving person!');
			} else {
				res.redirect('/');
			}
		});
	},
	remove: (req, res) => {
		Person.remove({name: req.params.name}, (err) => {
			if (err) {
				console.log('Error removing person!');
			} else {
				res.redirect('/');
			}
		});
	},
	showOne: (req, res) => {
		Person.find({name: req.params.name}, (err, person) => {
			if (err) {
				console.log('Error finding person!');
			} else {
				res.json(person);
			}
		});
	}
}
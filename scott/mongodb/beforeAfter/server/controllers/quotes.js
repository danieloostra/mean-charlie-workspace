var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
	show: (req, res) => {
		Quote.find({}, (err, quotes) => {
			res.render('main', {quotes: quotes});
		});
	},
	create: (req, res) => {
		var quote = new Quote({name: req.body.name, quote: req.body.quote});
		quote.save((err) => {
			if (err) {
				console.log('Error creating quote!');
			} else {
				res.redirect('/main');
			}
		});
	}
}
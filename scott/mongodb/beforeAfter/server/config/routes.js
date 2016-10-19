var quotes = require('../controllers/quotes.js');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index');
	});
	app.post('quotes', (req, res) => {
		quotes.create(req, res);
	});
	app.get('/main', (req, res) => {
		quotes.show(req, res);
	});
}
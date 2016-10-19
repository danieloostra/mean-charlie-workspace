var mongooses = require('../controllers/quotes.js');

module.exports = (app) => {
	app.get('/', (req, res) => {
		mongooses.show(req, res);
	});
	app.get('/new', (req, res) => {
		res.render('new');
	});
	app.get('/:id', (req, res) => {
		mongooses.showOne(req, res);
	});
	app.get('/edit/:id', (req, res) => {
		mongooses.editOne(req, res);
	});
	app.get('/:id/destroy', (req, res) => {
		mongooses.removeOne(req, res);
	});
	app.post('/create', (req, res) => {
		mongooses.create(req, res);
	});
	app.post('/update/:id', (req, res) => {
		mongooses.update(req, res);
	});
}
var users = require('../controllers/users.js');

module.exports = (app) => {
	app.post('/register', users.register);
	app.post('/login', users.login);
};
var users = require('../controllers/users.js');
console.log(users);
module.exports = function(app) {
	app.post('/create', users.create);
	app.get('/users', users.index);
	app.post('/login', users.login);
}
var muppets = require('../controllers/muppets.js')
module.exports = function(app) {
    app.get('/', function(req, res) {
        muppets.index(req, res);
    });
    app.get('/muppets/new', function(req, res) {
        muppets.new(req, res);
    });
    app.get('/muppets/:id', function(req, res) {
        muppets.show(req, res);
    });
    app.get('/muppets/:id/edit', function(req, res) {
        muppets.edit(req, res);
    });

    app.post('/muppets', function(req, res) {
        muppets.create(req, res);
    });
    app.post('/muppets/:id', function(req, res) {
        muppets.update(req, res);
    });
    app.post('/muppets/:id/destroy', function(req, res) {
        muppets.destroy(req, res);
    });
}

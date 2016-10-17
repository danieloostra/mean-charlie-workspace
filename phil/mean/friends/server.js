var express = require('express');
var path = require('path');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({exrended:true}));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


app.listen(8000, function() { console.log('listening on port 8000'); });

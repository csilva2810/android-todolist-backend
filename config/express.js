var express    = require('express');
var load       = require('express-load');
var todoRouter = require('../routes/todo');

module.exports = function () {
	
	var app = express();
	app.set('port', 3000);

	load('models', {cwd: './'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;

}
var express    = require('express');
var load       = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function () {
	
	var app = express();
	
	//variáveis de ambiente
	app.set('ip', process.env.IP || '0.0.0.0');
	app.set('port', process.env.PORT || 3000);
		
	//middlewares
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	//auto-load
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;

}
var http = require('http');
var app = require('./config/express')();

require('./config/database')(`mongodb://${app.get('ip')}/todoapp`);

app.listen(app.get('port'), app.get('ip'), function () {
  console.log(`Server listening: ${app.get('ip')}:${app.get('port')}`);
});

// http.createServer(app).listen(app.get('port'), function () {
// 	console.log(`Serving on port ${app.get('port')}`);
// });
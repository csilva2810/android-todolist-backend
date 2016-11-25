var mongoose = require('mongoose');
var connection;

module.exports = function (uri) {

  if (!connection) {
    connection = mongoose.connect(uri);  
  }
  
  mongoose.set('debug', true);
  
  mongoose.connection.on('connected', function () {
    console.log('Mongoose Connected!', uri);
  });
  
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected!', uri);
  });
  
  mongoose.connection.on('error', function (error) {
    console.log('Error Mongoose', error);
  });
  
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      // console.log('Mongoose Connection closed!');
      process.exit(0);
    });
  });
  
  return connection;
  
}
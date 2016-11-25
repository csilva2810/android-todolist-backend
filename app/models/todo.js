var mongoose = require('mongoose');

module.exports = function () {
  
  var schema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    dateTime: {
      type: Date,
      default: Date.now
    }
  }, {
    versionKey: false
  });
  
  return mongoose.model('Todo', schema);
  
}
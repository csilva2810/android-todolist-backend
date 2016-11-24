var todoController = require('../controllers/todoController');

module.exports = function (app) {

	app.get('/todos', todoController.index);

}
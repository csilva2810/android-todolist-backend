module.exports = function (app) {
  
  var controller = app.controllers.todo;
  
  //RETURN
	app.get('/todos', controller.getAll);
	app.get('/todos/:id', controller.getTodo);
	
	//INSERT
	app.post('/todos', controller.insert);
	
	//UPDATE
	app.put('/todos/:id', controller.update);
	
	//DELETE
	app.delete('/todos/:id', controller.delete);

}
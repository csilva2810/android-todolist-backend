module.exports = function (app) {
	
	var Todo = app.models.todo;
	
	var controller = {};

	controller.getAll = function (req, res) {
		
		Todo.find().exec()
			.then(function onSuccessGetAll(todos) {
				console.log(todos);
				res.json(todos);
			}, function onFailGetAll(error) {
				console.error(error);
				res.status(500).json(error);
			});
			
	}
		
	controller.getTodo = function (req, res) {
	  
    var id = req.params.id;
    
    Todo.findById(id).exec()
	    .then(function onSuccessGetTodo(todo) {
	    	if (!todo) throw new Error('Todo não encontrada');
		  	res.json(todo);
		  }, function onFailGetTodo(error) {
		  	console.error(error);
		  	res.status(404).json(error);
		  });
	  
	}
	
	controller.insert = function (req, res) {
		
		var todo = req.body;
		res.json(todo);
		
		Todo.create(req.body)
			.then(function onSuccessInsert (todo) {
				res.status(201).json(todo);
			}, function onFailInsert (error) {
				console.error(error);
				res.status(500).json(error);
			});
		
	}
	
	controller.update = function (req, res) {
		
		var id = req.params.id;
			
		Todo.findByIdAndUpdate(id, req.body).exec()
			.then(function onSuccessUpdate (todo) {
				res.json(todo);
			}, function onFailUpdate (error) {
				console.error(error);
				res.status(500).json(error);
			});
		
	}
	
	controller.delete = function (req, res) {
		var id = req.params.id;
		
		Todo.remove({"_id": id}).exec()
			.then(function onSuccessDelete() {
				res.end();
			}, function onFailDelete(error) {
				return console.error(error);
			});
	}
	
	return controller;
		
};
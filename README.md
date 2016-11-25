#android-todolist-backend

API to Create, Read, Update and Delete the todos.

##Methods

###GetAllTodos
- Request Method: GET
- Request URL: http://nodejs-csilva2810.c9users.io/todos

> Return all the Todos saved in database

###GetTodoById
- Request Method: GET
- Request URL: http://nodejs-csilva2810.c9users.io/todos/todoId

> Return the Todo by the specified ID

###InsertTodo
- Request Method: POST
- Request Body: todo[title], todo[desc], todo[dateTime]
- Request URL: http://nodejs-csilva2810.c9users.io/todos

> Insert a new Todo

###UpdateTodoById
- Request Method: PUT
- Request Body: todo[title], todo[desc], todo[dateTime]
- Request URL: http://nodejs-csilva2810.c9users.io/todos/todoId

> Update the Todo by the specified ID

###DeleteTodoById
- Request Method: DELETE
- Request URL: http://nodejs-csilva2810.c9users.io/todos/todoId

> Delete the Todo by the specified ID

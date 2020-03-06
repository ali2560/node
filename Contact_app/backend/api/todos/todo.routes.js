var Todos = require('./todo.controller');

module.exports = function(router){
    router.post('/create' , Todos.createTodo);
    router.get('/get', Todos.getTodos);
    router.get('/get/:id', Todos.getTodo);
    router.put('/update/:id', Todos.updateTodo);
    router.delete('/remove/:id', Todos.removeTodo);
}
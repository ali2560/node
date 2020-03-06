var todos = require('./todo.dao');

exports.createTodo = function(req, res, next){
    var todo = {
        
        name: req.body.name,
        number: req.body.number,
        label : req.body.label,
        completed: req.body.completed
    };

    todos.create(todo, function(err, todo){
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Todo created successfully"
        })
    })
}

exports.getTodos = function(req, res, next){
    todos.get({}, function(err, todos){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            todos: todos
        })
    })
}

exports.getTodo = function(req, res, next){
    let id = req.params.id;
    todos.findById(id, function(err, todos){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            todos:todos
        })
    })
}

exports.updateTodo = function(req, res, next){
    var todo = {
        name: req.body.name,
        number: req.body.number,
        label : req.body.label,
        completed: req.body.completed
    }
    todos.update({_id: req.params.id}, todo, function(err, todo){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message: "Todo update successfully"
        })
    })
}

exports.removeTodo = function(req, res, next){
    todos.deleteMany({_id: req.params.id}, function(err, todo){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message: "Todo deleted successfully"
        })
    })
}
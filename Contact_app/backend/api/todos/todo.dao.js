var mongoose = require('mongoose');
var todosSchema = require('./todo.model');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

todosSchema.statics = {
    create: function(data, cb){
        var todo = new this(data);
        todo.save(cb);
    },

    get: function(query, cb){
        this.find(query, cb);
    },

    getById: function(query, cb){
        this.find(query, cb);
    },

    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    
    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    
    }
}

var todosModel = mongoose.model('contacts', todosSchema);
module.exports = todosModel;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let todosSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    number: {
        type: String,
        unique: false,
        required: true
    },
    label: {
        type: String
    },
    completed: {
        type: Boolean
    }
});
module.exports = todosSchema;
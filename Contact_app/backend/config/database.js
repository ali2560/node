//require mongoose module
var mongoose = require('mongoose');

//var Server = require('mongodb').Server;
// require chalk module to give colors to console text
var chalk = require('chalk');


//reauire database URL from properties file
var dbURL = require('./properties').DB;
mongoose.set('useNewUrlParser', true);

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and import by server.js
module.exports = function(){
    mongoose.connect(dbURL);

    mongoose.connection.on('connected', function(){
        console.log(connected("mongoose default connection id open to ", dbURL));
    });

    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected' , function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
}
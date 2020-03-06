const express = require('express');
//hero routes


const bodyParser = require('body-parser');
const cors = require('cors');
const properties = require('./config/properties');
const db = require('./config/database');
var todosRoutes = require('./api/todos/todo.routes');
var app = express();


//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

//call the database connectivity function
db();

app.use(cors());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
//use express router
app.use('/api', router);
//call heros routing
todosRoutes(router);

app.listen(properties.PORT, (req, res)=> {
    console.log(`server is running on ${properties.PORT} port.`);
})

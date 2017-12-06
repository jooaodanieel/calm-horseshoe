const express = require('express'),
	bodyParser = require('body-parser'),
	config = require('./config'),
	routes = require('./components/users/usersRoutes'),
    path = require('path');

const app = express();

var swaggerJSDoc = require('swagger-jsdoc');
var swaggerDefinition = {
    info: {
      title: 'RESTful API with NodeJS - theVelops intern',
      version: '1.0.0',
      description: 'A simple RESTful API using NodeJS'
    },
    host: 'localhost:3000',
    basePath: '/users',
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./components/users/usersRoutes.js']
};

var swaggerSpec = swaggerJSDoc(options);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/swagger.json', function(req,res) {
    res.setHeader('Content-Type','application/json');
    res.send(swaggerSpec);
});

app.get('/api-docs/', function (req,res) {
    res.render(__dirname+'/public/api-docs/');
});

module.exports = app;

const express = require('express'),
	bodyParser = require('body-parser'),
	config = require('./config'),
	routes = require('./components/users/usersRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(config.server.default404);

module.exports = app;

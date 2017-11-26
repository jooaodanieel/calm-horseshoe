var config = require('./config'),
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	routes = require('./components/users/usersRoutes');

var port = config.server.port,
	app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(config.server.default404);

app.listen(port);

console.log('Listening on port: '+ port);

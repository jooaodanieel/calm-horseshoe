var config = require('./config'),
	mongoose = require('mongoose'),
	app = require('./app'),
	port = config.server.port;

mongoose.Promise = global.Promise;
mongoose.connect(config.db.default);

app.listen(port);

console.log('Listening on port: '+ port);

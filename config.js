var config = {};

config.server = {};

config.server.port = process.env.port || 3000;

/**
 * Sets a standard response when no route matches the request.
 * @callback
 */
config.server.default404 = function(req,res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
};

config.db = {
	default: 'mongodb://localhost/restapiwithnodejs',
	test: 'mongodb://localhost/restapiwithnodejs_test',
};

module.exports = config;

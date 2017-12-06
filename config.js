var config = {};

config.server = {};

config.server.port = process.env.port || 3000;

config.db = {
	default: 'mongodb://localhost/restapiwithnodejs',
	test: 'mongodb://localhost/restapiwithnodejs_test',
};

module.exports = config;

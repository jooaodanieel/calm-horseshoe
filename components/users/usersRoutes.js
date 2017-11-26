'use strict';

module.exports = function(app) {
	var UsersController = require('./usersController');

	app.route('/users')
		.get(UsersController.index)
		.post(UsersController.create);

	app.route('/users/:userId')
		.get(UsersController.read)
		.put(UsersController.update);
};

'use strict';

module.exports = function(app) {
	var UsersController = require('./usersController');

	app.route("/users")
		.post(UsersController.createAnUser);
};

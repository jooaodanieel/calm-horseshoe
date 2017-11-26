'use strict';

var mongoose = require('mongoose');
var User = require('./usersModel');
mongoose.model('Users');

/**
 * Receives a request and sends a response with the created user
 * or with the validation errors
 */
exports.createAnUser = function (req, res) {
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

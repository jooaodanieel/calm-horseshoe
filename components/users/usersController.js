'use strict';

var mongoose = require('mongoose');
var User = require('./usersModel');
mongoose.model('Users');


/**
 * Receives a request and sends a response with all
 * users in the database
 */
exports.index = function(req,res) {
	User.find({}, function(err, users) {
		if (err)
			res.send(err);

		res.json(users);
	});
};

/**
 * Receives a request and sends a response with the created user
 * or with the validation errors
 */
exports.create = function (req, res) {
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

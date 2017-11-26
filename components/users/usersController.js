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

/**
 * Receives a request and sends a response with the identified user
 * or with an error when not found
 */
exports.read = function (req,res) {
	User.findById(req.params.userId, function(err,user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

/**
 * Receives a request and sends a response with the user updated
 * or with errors, due to validation or not found
 */
exports.update = function(req, res) {
	User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err,user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: [true, "Email must be set"]
	},
	first_name: {
		type: String,
		required: [true, "First name must be set"]
	},
	last_name: {
		type: String,
		required: [true, "Last name must be set"]
	},
	personal_phone: {
	    type: String,
		default: ''
	}
});

module.exports = mongoose.model('Users',UserSchema);

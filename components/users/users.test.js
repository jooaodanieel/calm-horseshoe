'use strict';

var mongoose = require('mongoose');
var User = require('./usersModel');
mongoose.model('Users');

describe('User', () => {
	test('instanciated without required fields cause errors',() => {
		var user = new User();

		user.validate(function(err) {
			expect(err.errors.email).toExist;
			expect(err.errors.first_name).toEexist;
			expect(err.errors.last_name).toExist;
		});
	});

	test('properly created has its properties set', () => {
		var data = {
			email: "karla.fagundes@gmail.com",
			first_name: "Karla",
			last_name: "Fagundes",
			personal_phone: "(11)971696297"
		};

		var user = new User(data);

		expect(user.email).toEqual(data.email);
		expect(user.first_name).toEqual(data.first_name);
		expect(user.last_name).toEqual(data.last_name);
		expect(user.personal_phone).toEqual(data.personal_phone);
	});
});

'use strict';

var mongoose = require('mongoose'),
	User = require('./usersModel'),
	request = require('supertest'),
	app = require('../../app'),
	config = require('../../config');

mongoose.model('Users');

describe('User model', () => {
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

describe('User API', () => {

	test('Get / returns 404', () => {
		request(app).get('/').then((res) => {
			expect(res.statusCode).toBe(404);
			done();
		});
	});

	describe('Correct routes', () => {

		var input_users;

		beforeAll(() => {
			mongoose.connect(config.db.test);
		});

		beforeEach(() => {
			input_users = [
				{ email: 'peter_frampton@gmail.com', first_name: 'Peter',
				 last_name: 'Frampton', personal_phone: '829871202' },
				{ email: 'roger_waters@gmail.com', first_name: 'Roger',
				 last_name: 'Waters', personal_phone: '812287372' }
			];

			input_users.forEach(function (item,index) {
				var u = new User(item);
				u.save(function (err,user) {
					if (err)
						console.log(err);
				});
			});
		});

		afterEach(() => {
			input_users.forEach(function (item, index) {
				User.find(item).remove().exec();
			});
		});

		afterAll((done) => {
			mongoose.disconnect(done);
		});

		test('GET /users retrieves all users', () => {
			request(app).get('/users').exec().then((res) => {
				expect(res.body.length).toEqual(input_users.length);

				done();
			});
		});

		test('POST /users creates a new user', () => {
			var post_user = {
				email: 'post_user@test.com',
				first_name: 'Post',
				last_name: 'User',
				personal_phone: '12289862'
			};
			request(app).post('/users')
				.send(post_user)
				.type('form')
				.exec()
				.then((res) => {
					console.log(res.statusCode);
					expect(res.statusCode).toBe(200);
					done();
				});
		});

		test('GET /users/:userId retrieve a specific user', () => {
			User.findOne({}, function (err, a_user) {
				if (err)
					console.log(err);

				request(app).get('/users/'+a_user._id).exec().then((res) => {
					expect(res.body.name).toEqual(a_user.name);
					done();
				});
			});
		});

		test.skip('PUT /users/:userId updates a specific user', () => {});

		test.skip('DELETE /users/:userId deletes a specific user', () => {});
	});
});

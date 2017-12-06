'use strict';

module.exports = function(app) {
	var UsersController = require('./usersController');

	/**
	 * @swagger
	 * definitions:
	 *  User:
	 *      properties:
	 *          first_name:
	 *              type: string
	 *          last_name:
	 *              type: string
	 *          email:
	 *              type: string
	 *          personal_phone:
	 *              type: string
	 */

	app.route('/users')
	/**
	 * @swagger
	 * /users:
	 *  get:
	 *      tags:
	 *          - Users
	 *      description: Returns all users
	 *      produces:
	 *          - application/json
	 *      responses:
	 *          200:
	 *              description: An array of users
	 *              schema:
	 *                  $ref: '#/definitions/User'
	 */
		.get(UsersController.index)
	/**
	 * @swagger
	 * /users:
	 *  post:
	 *      tags:
	 *          - Users
	 *      description: Creates a new user
	 *      produces:
	 *          - application/json
	 *      parameters:
	 *          - name: user
	 *            description: User object
	 *            in: body
	 *            required: true
	 *            schema:
	 *                $ref: '#/definitions/User'
	 *      responses:
	 *          200:
	 *          description: Successfully created
	 */
		.post(UsersController.create);

	app.route('/users/:userId')
	/**
	 * @swagger
	 * /users/{id}:
	 *  get:
	 *      tags:
	 *          - Users
	 *      description: Returns a single user
	 *      produces:
	 *          - application/json
	 *      parameters:
	 *          - name: id
	 *            description: User's id
	 *            in: path
	 *            required: true
	 *            type: ObjectId
	 *      responses:
	 *          200:
	 *              description: A single user
	 *              schema:
	 *                  $ref: '#/definitions/User'
	 */
		.get(UsersController.read)
	/**
	 * @swagger
	 * /users/{id}:
	 *  put:
	 *      tags:
	 *          - Users
	 *      description: Updates a single user
	 *      produces:
	 *          - application/json
	 *      parameters:
	 *          - name: users
	 *            in: body
	 *            description: Fields for the User resource
	 *            schema:
	 *                type: array
	 *                $ref: '#/definitions/User'
	 *      responses:
	 *          200:
	 *              description: Successfully updated
	 */
		.put(UsersController.update)
	/**
	 * @swagger
	 * /users/{id}:
	 *  delete:
	 *      tags:
	 *          - Users
	 *      description: Deletes a single user
	 *      produces:
	 *          - application/json
	 *      parameters:
	 *          - name: id
	 *            description: User's id
	 *            in: path
	 *            required: true
	 *            type: ObjectId
	 *      responses:
	 *          200:
	 *              description: Successfully deleted
	 */
		.delete(UsersController.delete);
};

# RESTful API with Node JS

This project is an intern applicant test for theVelops


## Getting Started

This document is meant to instruct you to start the API server, as well as run its tests.


## Prerequisites

This API depends on:
1. an up and running instalation of [MongoDB](https://www.mongodb.com/)
2. [Node JS](https://nodejs.org/en/) (v9.2.0 or greater)
3. [npm](https://www.npmjs.com/) (v5.5.1 or greater)


## Installation

First, you need to clone this repository
`git clone https://github.com/jooaodanieel/calm-horseshoe.git`

Then, enter in the project root directory
`cd calm-horseshoe`

You need to install project dependencies with
`npm install`

Once this process is done, you can run the development server with:
`npm run dev`

If you want to start the production server, say:
`npm start`

## Running tests

Tests were written to:
- maintenance of code standards (with theVelops .eslint)
- data consistency (over User model)
- external access (over API routes)

To ESLint check, run:
`npm lint`

Or to run all tests, run:
`npm test`
> note: this will run lint before running other tests


## Documentation

The API was documented using [Swagger](https://swagger.io/), and the code, with [JSDoc](http://usejsdoc.org/).

Once you have a local server running, you can access the docs at:
- the API `http://localhost:3000/api-docs/`
- the code `http://localhost:3000/code-docs/`

## Author

João Francisco Daniel - 2017 - Applying for theVelops internship


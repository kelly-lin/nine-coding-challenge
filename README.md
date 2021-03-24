# Welcome to my solution to the 9Digital Coding Challenge
This repository contains the rest API source code for getting tv show information from Nine's database.

# Getting started
## Requirements
* ExpressJS
* NodeJS
* dotenv

# Installation
1. Clone repository
2. Install dependencies using `npm install`

# Running
To run the server, run the following command from the terminal.
```
npm start
```

The default port set for the application should be defined in a .env file under the variable name "PORT" in the root folder of the project. If this variable is not set then the default port is set to 6000. You can then access the API by issuing requests to http://localhost:6000/.

# Testing
Run all tests by running the command below in the root folder of the project.
```
jest
```
All tests are located in the ***tests*** folder. You can run a specific test suite by running the command `jest` followed by the path of the test suite. For example, to run the test suite for the utility functions `jest tests/unit/utility.test.js`.

Test fixtures which can be reused for different tests can are located in *tests/fixtures*. The fixtures contain sample request and response data.

# Production
This application can simply be deployed on [Heroku](https://www.heroku.com/) through the Heroku CLI or through the automatic deployment platform provided by Heroku. This application has been deployed at [https://nine-coding-challenge-kellylin.herokuapp.com/](https://nine-coding-challenge-kellylin.herokuapp.com/) and is open for requests.

# API


# Authors
Kelly Lin
[findkellylin@gmail.com](mailto:findkellylin@gmail.com)

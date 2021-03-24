# Welcome to my solution to the 9Digital Coding Challenge
This repository contains the REST API source code for returning a filtered list of tv shows. The scope of this application is to take a post request with a JSON payload containing information about tv shows and returning a list of shows which have DRM and have 1 or more episodes.

# Important notes
Requests have be to submitted to the end point with the following JSON structure:
```
{
  "payload": [
    tvShow,
    tvShow,
    ...
  ]
}
```
The REST API extracts the following properties from the tvShow objects ("image.showImage", "slug", "title") and returns an JSON object containing an array of objects with these properties under a "response" key. An example reponse object is shown below.

```
{
  "response": [
    {
      "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
      "slug": "show/16kidsandcounting",
      "title": "16 Kids and Counting"
    }
  ]
}
```

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

The default port set for the application should be defined in a .env file under the variable name "PORT" in the root folder of the project. If this variable is not set then the default port is set to 5000. You can then access the API by issuing requests to http://localhost:5000/.

# Testing
Run all tests by running the command below in the root folder of the project.
```
jest
```
All tests are located in the ***tests*** folder. You can run a specific test suite by running the command `jest` followed by the path of the test suite. For example, to run the test suite for the utility functions `jest tests/unit/utility.test.js`.

Test fixtures which can be reused for different tests can are located in *tests/fixtures*. The fixtures contain sample request and response data.

# Production
This application can simply be deployed on [Heroku](https://www.heroku.com/) through the Heroku CLI or through the automatic deployment platform provided by Heroku. This application has been deployed at [https://nine-coding-challenge-kellylin.herokuapp.com/](https://nine-coding-challenge-kellylin.herokuapp.com/) and is open for requests.

# Authors
Kelly Lin
[findkellylin@gmail.com](mailto:findkellylin@gmail.com)

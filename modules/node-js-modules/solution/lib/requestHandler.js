var url = require('url');
var getAge = require('./ageChecker');
var buildResponse = require('./responseBuilder');

module.exports = function(request, response) {
  var query = url.parse(request.url, true).query;

  response.end(buildResponse(query.name, getAge((+query.age))));
};

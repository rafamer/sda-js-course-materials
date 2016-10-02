var http = require('http');
var requestHandler = require('./lib/requestHandler');
var port = 5000;
var server = http.createServer(requestHandler);

server.listen(port, function () {
  console.log("Server listening on: http://localhost:%s", port);
});

'use strict';

const http = require('http');

const requestParser = require('./lib/parse-request.js');
const bodyParser = require('./lib/parse-body.js');

const requestHandler = (req,res) => {

  console.log(req.method);
  console.log(req.headers);
  console.log(req.url);
};

const app = http.createServer(requestHandler);

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback);
}
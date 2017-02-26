var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("/var/www/tiles/data");

var server = http.createServer(function(req, res){
    var done = finalhandler(req, res);
    res.setHeader('Access-Control-Allow-Origin', '*');
    serve(req, res, done);
});

server.listen(80);
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Saludos usuario ' + q.nombre);
}).listen(process.env.PORT);

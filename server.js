var http = require('http');
var url = require('url');
var nombres = [];
http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  nombres.push(q.nombre);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Saludos ' + nombres.join());
}).listen(process.env.PORT);

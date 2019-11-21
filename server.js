var http = require('http');
var url = require('url');
var jugadores = [];
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  if (q.jugador) {
    // Por lo menos lo intentamos
    res.end('Recibido')
  } else {
    res.end('Error');
  }
}).listen(process.env.PORT);

var http = require('http');
var url = require('url');
var jugadores = [];
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  if (q.jugador) {
    // Por lo menos lo intentamos
    var jugador = JSON.parse(q.jugador);
    if (typeof jugador.nombre === 'string') {
        res.end('Correcto');
    } else if {
      res.end('Incorrecto');
    }
  } else {
    res.end('Error');
  }
}).listen(process.env.PORT);

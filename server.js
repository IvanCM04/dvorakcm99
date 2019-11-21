var http = require('http');
var url = require('url');
var jugadores = [];
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  if (q.jugador) {
    // Por lo menos lo intentamos
    var jugador = JSON.parse(q.jugador);
    if (typeof jugador.nom === 'string' && 
        typeof jugador.pos === 'object' &&
        typeof jugador.pos.length === 'number' &&
        jugador.pos.length === 2 &&
        typeof jugador.tam === 'number') {
           var indice = -1;
           for (var i = 0; i < jugadores.length; i++) {
           if (jugadores[i].nom === jugador.nom) {
             indice = i;
             break;
           }           
        }
      if (indice < 0) {
        //crear
        jugadores.push(jugador);
        res.end('Jugador creado');
      } else {
        //actualizar
        jugadores[indice] = jugador;
        for (var i = 0; i < jugadores.length; i++) {
          var dx = jugadores[i].pos[0] - jugador.pos[0];
          var dy = jugadores[i].pos[1] - jugador.pos[1];
          var d = Math.sqrt(dx * dx + dy * dy);
          res.end('Jugador actualizado');
        }
      }     
    } else {
      res.end('Incorrecto');
    }
  } else {
    res.end('Error');
  }
}).listen(process.env.PORT);

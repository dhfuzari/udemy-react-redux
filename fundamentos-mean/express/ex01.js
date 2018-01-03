const express = require('express');
const server = express();

// Configurando e mapeando rotas 

server.get('/', function(req, res){
    res.send('<h1>GET Index!</h1>');
});

server.post('/', function(req, res){
    res.send('<h1>POST Index!</h1>');
});

server.put('/', function(req, res){
    res.send('<h1>PUT Index!</h1>');
});

server.all('/test', function(req, res){
    res.send('<h1>ALL Index!</h1>');
});

server.get(/api/, function(req, res){
    res.send('<h1>API !</h1>');
});

server.listen(3000, () => console.log('executando...'));


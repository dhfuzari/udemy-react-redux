const express = require('express');
const server = express();

// use -> Definie um tratamento de request que mapeia todos os verbos/métodos http e defini a url recebida
// como o prefixo inicial da url para usar o middleware atual, ou seja e tratara qualquer url que comece com 
// "/api" como no exemplo abaixo


// Middleware que filtra qualquer request que contenha "/api" na url
server.use('/api', function(req, res, next){
    console.log('Inicio...');
    next();
    console.log('...Fim');
});

server.use('/api', function(req, res){
    console.log('Resposta...');
    res.send('<h1>Olá API!!!</h1>');
});

// Middleware que filtra qualquer request, pois não informa nehuma url especifica 
server.use(function(req, res){
    console.log('Middleware sem filtro de url');
    res.send('<h1>Filtro para todos os requests vindos de qualquer url</h1>');
});

server.listen(3000, () => console.log('executando...'));


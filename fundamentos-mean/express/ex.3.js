const express = require('express');
const server = express();

// use -> Definie um tratamento de request que mapeia todos os verbos/métodos http e define a url recebida
// como o prefixo inicial da url para usar o middleware atual, ou seja, tratará qualquer url que comece com 
// "/api/" como no exemplo abaixo. Obs.: /api/ é diferente de /api-XYZ. Ou seja, o método trata qualque url
// que tenha o primeiro "diretório-recurso" definido como /api, por isso se define como /api/


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

// Middleware que filtra qualquer request de qualquer url que não foi capturada por nenhum outro middleware,
// pois não informa nehuma url especifica 
server.use(function(req, res){
    console.log('Middleware sem filtro de url');
    res.send('<h1>Filtro para todos os requests vindos de qualquer url</h1>');
});

server.listen(3000, () => console.log('executando...'));


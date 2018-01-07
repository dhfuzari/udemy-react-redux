const express = require('express');
const server = express();

// O método route é utilizado para definir vários middlewares encadeados, para a mesma url ou padrão de  
// url(regex) tornando possível tratar todos os méthodos http que foram definidos para aquela url. Ou seja
// vc define a url apenas uma vez, e mapeia todos os méthodos em sequencia que deseja utilizar para o
// tratamento desse request

server.route('/clientes')
    .get((req, res) => res.send('Lista de clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Remove cliente'))
    .patch((req, res) => res.send('Patch'))

server.listen(3000, () => console.log('executando...'));


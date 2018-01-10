const express = require('express');
const router = express.Router();

// O router é como um sub-grupo de rotas, que depois será passado para o objeto server
// que é quem captura os requests e usa esse objeto router para tratar esse subgrupo de 
// rotas definido como primeiro parametro do metodo use do objeto server(arquivo ex.5.js)

router.use((req, res, next) => {
    const init = Date.now();
    next();
    console.log(`Tempo = ${Date.now() - init} ms.`)
});

router.get('/produto/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Caneta'});
});

router.get('/clientes/:id/:name', (req, res) => {
    res.json({id: req.params.id, name: req.params.name});
});

module.exports = router;

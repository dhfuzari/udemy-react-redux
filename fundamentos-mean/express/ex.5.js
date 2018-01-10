const express = require('express');
const server = express();
const router = require('./ex.5_router');

server.use('/api', router);

server.listen(3000, () => console.log('Starting...'));
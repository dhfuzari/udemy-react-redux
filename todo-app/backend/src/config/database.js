const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Usa as promises nativas do node - as do mongoose são "deprecated"
module.exports = mongoose.connect('mongodb://localhost/todo');
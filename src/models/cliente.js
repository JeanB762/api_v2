var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    nome: String,
    telefone: Number,
    visu: Number,
    createDate: { 
        type: Date, 
        default: Date.now 
    },
});

var cliente = mongoose.model('cliente', clientSchema);

module.exports = cliente;
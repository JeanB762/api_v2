const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// exports.index = async (req, res) => {
//     const cliente = await Cliente.find();

//     return res.json(cliente);
// };

// exports.store = async (req, res) => {
//     const { nome, telefone, visu } = req.body;
//     const cliente = await new Cliente({
//         nome,
//         telefone,
//         visu
//     });
//     cliente.save();
// };

export default class hello(req, res){
    res.send({jean: true});
};

// module.exports = app => app.use('/projects', router);
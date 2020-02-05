const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

module.exports = {
        async index(req, res) {
        const cliente = await Cliente.find();

        return res.json(cliente);
    },

    async store(req, res){
        const { nome, telefone, visu } = req.body;
        const cliente = await new Cliente({
            nome,
            telefone,
            visu
        });
        cliente.save();
    },

    async hello(req, res){
        res.send(req.body);
    }
}
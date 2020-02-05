const { Router } = require('express');
const controller = require('./controllers/index');


const routes = Router();


// routes.get('/listar', controller.index);
// routes.post('/cadastrar', controller.store);
routes.get('/hello', controller.hello);

module.exports = routes;
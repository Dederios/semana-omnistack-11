const express = require('express');

const routes = express.Router();

routes.post('/users' , (request, response) => {
    const body = request.body;

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Daniel'
    });
});

module.exports = routes;
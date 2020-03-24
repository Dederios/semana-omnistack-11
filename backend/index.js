const express = require('express');

const app = express();

app.use(express.json());

app.post('/users' , (request, response) => {

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Daniel'
    });
});

app.listen(3333);
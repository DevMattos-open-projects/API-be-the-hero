const express = require('express');
const { response } = require('express');

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    evento: 'semana OmniStack 11.0',
    aluno: 'Rafael Matos',
  });
});

app.listen(3333);

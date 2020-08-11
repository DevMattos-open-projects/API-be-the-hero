const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('Helo world');
});

app.listen(3333);

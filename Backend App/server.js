'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h style="color: purple"> Congratulations on deploying your first Backend App<h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

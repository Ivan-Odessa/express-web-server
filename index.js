const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from the Express Web server');
});

app.listen(3000);

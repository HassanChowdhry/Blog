const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})

app.use(express.static(__dirname + '/src'));

app.listen(port, () => {
  console.log('hallo');
})
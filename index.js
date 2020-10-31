const express = require('express');
require('dotenv').config();
const compression = require('compression');
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';

const app = express();
const port = process.env.PORT || 5000;
app.use(compression());

env !== 'development' && app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());

env !== 'development' &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

app.listen(port);

console.log(`Backend running on port ${port}`);

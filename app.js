const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://127.0.0.1/prodAPI');
const port = process.env.PORT || 3000;
const Product = require('./models/prodModel');
const Category = require('./models/categoryModel');
const prodRouter = require('./routes/prodRouter')(Product);
const catRouter = require('./routes/catRouter')(Category);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', prodRouter);
app.use('/Catapi', catRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

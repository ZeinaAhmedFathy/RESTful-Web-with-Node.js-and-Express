const mongoose = require('mongoose');

const { Schema } = mongoose;

const catModel = new Schema(
  {
    Name: { type: String },
  }
);

module.exports = mongoose.model('Category', catModel);
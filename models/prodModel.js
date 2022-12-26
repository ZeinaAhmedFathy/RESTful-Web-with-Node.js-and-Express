const mongoose = require('mongoose');

const { Schema } = mongoose;

const prodModel = new Schema(
  {
    Name: { type: String },
    Price: { type: Number },
    Quantity: { type: Number },
    imgURL: { type: String },
    CateogryID:{ type: Number },
  }
);

module.exports = mongoose.model('Product', prodModel);
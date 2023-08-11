// models/Property.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  availableDates: [String],
});

module.exports = mongoose.model('Property', propertySchema);

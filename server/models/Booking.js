const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  // Other booking fields
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

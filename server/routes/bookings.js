// routes/bookings.js

const express = require('express');
const authMiddleware = require('../middleware/auth');
const Property = require('../models/Property');
const Booking = require('../models/Booking');

const router = express.Router();

// Book a property
router.post('/:propertyId/book', async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const { startDate, endDate } = req.body;
    const booking = new Booking({
      property: property._id,
      startDate,
      endDate,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

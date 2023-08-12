// routes/properties.js

const express = require('express');
const authMiddleware = require('../middleware/auth');
const Property = require('../models/Property');
const Booking = require('../models/Booking');

const router = express.Router();

// Get property listings
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Search properties by title and location
router.get('/search', async (req, res) => {
  try {
    const { title, location } = req.query;
    const filters = {};

    if (title) {
      filters.title = { $regex: title, $options: 'i' };
    }

    if (location) {
      filters.location = { $regex: location, $options: 'i' };
    }

    const properties = await Property.find(filters);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Filter properties by price range
router.get('/filter', async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.query;
    const filters = {};

    if (minPrice && !isNaN(minPrice)) {
      filters.price = { $gte: parseInt(minPrice) };
    }

    if (maxPrice && !isNaN(maxPrice)) {
      if (filters.price) {
        filters.price.$lte = parseInt(maxPrice);
      } else {
        filters.price = { $lte: parseInt(maxPrice) };
      }
    }

    const properties = await Property.find(filters);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/:propertyId', async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
router.post('/:propertyId/book', authMiddleware, async (req, res) => {
  try {
    const property = await Property.findById(req.params.propertyId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    const { startDate, endDate } = req.body;
    
    const booking = new Booking({
      property: property._id,
      user: req.user.userId, // Associate the booking with the logged-in user
      startDate,
      endDate,
    });
    
    await booking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Create a new property listing
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, image, description, location, price } = req.body;
    const property = new Property({
      title,
      image,
      description,
      location,
      price,
    });
    await property.save();
    res.status(201).json({ message: 'Property created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/Auth');
const propertyRoutes = require('./routes/property');
const bookingRoutes = require('./routes/bookings');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');


const app = express();
 
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

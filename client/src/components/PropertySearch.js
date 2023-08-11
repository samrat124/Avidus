// src/components/PropertySearch.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('https://frail-bat-attire.cyclic.app/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/properties/search', {
        params: { title: searchTitle, location: searchLocation }
      });
      setProperties(response.data);
    } catch (error) {
      console.error('Error searching properties:', error);
    }
  };

  return (
    <div className="property-search">
      <input type="text" placeholder="Search by Title" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
      <input type="text" placeholder="Search by Location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div className="property-list">
        {properties.map(property => (
          <div className="property-card" key={property._id}>
            <h3>{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySearch;

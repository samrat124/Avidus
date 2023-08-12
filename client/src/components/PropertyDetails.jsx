// PropertyDetails.js

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './PropertyDetails.css'

const PropertyDetails = ({ token,login }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const[property,setProperty]=useState({})

    const navigate=useNavigate();
  let {_id}=useParams();
  console.log(_id)

  let fetchData=async()=>{
    axios.get(`https://frail-bat-attire.cyclic.app/api/properties/${_id}`)
    .then(res=>setProperty(res.data))
    console.log(property);
    
  }

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if(login){
    try {
      await axios.post(`https://frail-bat-attire.cyclic.app/api/bookings/${_id}/book`, { startDate, endDate });

      alert('Booking successful!');
      navigate('/');
      // Refresh property details or update state to reflect the booking
    } catch (error) {
      console.error('Error booking property:', error);
    }}
    else{
      alert('Please Login First')
      navigate('/login')
    }
  };
  useEffect(()=>{
   fetchData();
  },[])

  return (
    <div>
    <div className='detail-main'>
      <h2>{property.title}</h2>
      <img src={property.image} alt='details'/>
      <h3>{property.description}</h3>
      <p>Price: ${property.price} per night</p>
      <form className='detail-form' onSubmit={handleBookingSubmit}>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className='submit-btn' type="submit">Book Property</button>
      </form>
    </div>
    </div>
  );
};

export default PropertyDetails;

import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = ({token}) => {
const[state,setState]=useState([]);
const navigate=useNavigate();
let handleClick=(ele)=>{
   
  navigate(`/${ele._id}`);
  // alert("property booked")
}
useEffect(()=>{
 axios.get('https://frail-bat-attire.cyclic.app/api/properties')
 .then(res=>setState(res.data))
  
},[])
  return (
    <div>
    <div className='home-main'>
      {
        state.map((ele,index)=>{
            return <div key={index}>
                <h3>{ele.title}</h3>
               <img className='home-img' src={ele.image} alt={ele.title} />
               <h3 className='home-desc'>{ele.description}</h3>
               <h3>Price: {ele.price} /Night</h3>
               <button onClick={()=>handleClick(ele)} className='home-btn'>Book</button>
            </div>
        })
      }
    </div>
    </div>
  )
}

export default Home
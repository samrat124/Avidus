import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Home.css'

const Home = ({token}) => {
const[state,setState]=useState([]);
let handleClick=(ele)=>{
  console.log(ele);
  alert("property booked")
}
useEffect(()=>{
 axios.get('http://localhost:5000/api/properties')
 .then(res=>setState(res.data))
 console.log(state);
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
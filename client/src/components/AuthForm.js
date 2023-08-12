// src/components/AuthForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ handleLogin ,handleAuth,log}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  let navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      // Make API request to login or register
      const response = await axios.post(`https://frail-bat-attire.cyclic.app/api/auth/${log}`, {username,password});
      const token = response.data.token;
       
       handleAuth(token)// Pass token up to parent component
       
       if(log=="login"){
         handleLogin(true);
      navigate('/')
       }
       else{
         handleLogin(false);
        navigate('/login')
       }
    
  };

  return (
    <div className='auth-main'>
    <form className="auth-form" onSubmit={handleSubmit}>
        <h3>{log.toUpperCase()}</h3>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button type="submit">{log.toUpperCase()}</button>
    </form>
    </div>
  );
};

export default AuthForm;

// src/components/AuthForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ onAuth ,log}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  let navigate=useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      // Make API request to login or register
      const response = await axios.post(`http://localhost:5000/api/auth/${log}`, {username,password});
      const token = response.data.token;
      onAuth(token); // Pass token up to parent component
      navigate('/')
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className='auth-main'>
    <form className="auth-form" onSubmit={handleAuth}>
        <h3>{log.toUpperCase()}</h3>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button type="submit">{log}</button>
    </form>
    </div>
  );
};

export default AuthForm;

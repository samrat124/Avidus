// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import './styles.css';
import AuthForm from './components/AuthForm';
import PropertySearch from './components/PropertySearch';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [token, setToken] = useState(null);

  const handleAuth = (authToken) => {
    setToken(authToken);
  };

  return (
    <BrowserRouter>
       
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home token={token}/>}/>
          <Route path="/login" element={<Login onAuth={handleAuth}/>}/>
          <Route path='/register' element={<Register onAuth={handleAuth}/>}/>
           
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;

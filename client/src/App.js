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
import PropertyDetails from './components/PropertyDetails';

function App() {
  const [token, setToken] = useState(null);
  const [login,setLogin]=useState(false);

  const handleAuth = (authToken) => {
    setToken(authToken);
  };
  const handleLogin=(ele)=>{
    setLogin(ele);
  }

  return (
    <BrowserRouter>
       
         <Navbar login={login} handleLogin={handleLogin}/>
        <Routes>
          <Route path="/" element={<Home token={token}/>}/>
          <Route path="/login" element={<Login handleLogin={handleLogin} handleAuth={handleAuth} />}/>
          <Route path='/register' element={<Register handleLogin={handleLogin}  handleAuth={handleAuth}/>}/>
           <Route path='/:_id' element={<PropertyDetails token={token} login={login}/>}/>
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;

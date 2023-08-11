import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({login}) => {
   
   
  return (
    
    <div className='navmain'>
        <Link to='/'>Home</Link>
        {login?null:<Link to='/login'>Login</Link>}
        {login?null:<Link to='/register'>Register</Link>}
    </div>
    
  )
}

export default Navbar
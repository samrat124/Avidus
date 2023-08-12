import React from 'react'
import AuthForm from './AuthForm'

const Register = ({handleLogin,handleAuth}) => {
  return (
    <div>
        {<AuthForm handleLogin={handleLogin} handleAuth={handleAuth} log="register"/>}
    </div>
  )
}

export default Register
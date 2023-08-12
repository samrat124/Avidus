import React from 'react'
import AuthForm from './AuthForm'

const Login = ({handleLogin, handleAuth}) => {
  return (
    <div>{<AuthForm handleLogin={handleLogin} handleAuth={handleAuth} log="login"/>}</div>
  )
}

export default Login
import React from 'react'
import AuthForm from './AuthForm'

const Login = ({handleLogin}) => {
  return (
    <div>{<AuthForm handleLogin={handleLogin} log="login"/>}</div>
  )
}

export default Login
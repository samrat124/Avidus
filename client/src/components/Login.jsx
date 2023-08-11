import React from 'react'
import AuthForm from './AuthForm'

const Login = ({handleAuth}) => {
  return (
    <div>{<AuthForm onAuth={handleAuth} log="login"/>}</div>
  )
}

export default Login
import React from 'react'
import AuthForm from './AuthForm'

const Register = ({handleAuth}) => {
  return (
    <div>
        {<AuthForm onAuth={handleAuth} log="register"/>}
    </div>
  )
}

export default Register
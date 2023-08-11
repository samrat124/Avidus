import React from 'react'
import AuthForm from './AuthForm'

const Register = ({handleLogin}) => {
  return (
    <div>
        {<AuthForm handleLogin={handleLogin} log="register"/>}
    </div>
  )
}

export default Register
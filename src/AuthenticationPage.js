import React from 'react'
import LoginForm from './LoginForm'
import './AuthenticationPage.scss'

const AuthenticationPage = () => {
  return (
    <div class="authentication_page">
      <div>
        <h1>Kowhub</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default AuthenticationPage

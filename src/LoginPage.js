import React from 'react'
import LoginForm from './LoginForm'
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <div class="login_page">
      <div>
        <h1>Kowhub</h1>
        <LoginForm />
        <div>
          Don't have an account? <a href="#">Create one</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

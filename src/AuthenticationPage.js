import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import './AuthenticationPage.scss'

const AuthenticationPage = () => {
  return (
    <div class="authentication_page">
      <div>
        <h1>Kowhub</h1>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
      </div>
    </div>
  )
}

export default AuthenticationPage

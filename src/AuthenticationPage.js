import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import ConfirmSignUpForm from './ConfirmSignUpForm'
import ResendSignUpForm from './ResendSignUpForm'
import './AuthenticationPage.scss'

const AuthenticationPage = () => {
  return (
    <div class="authentication_page">
      <div>
        <h1>Kowhub</h1>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign_up" component={SignUpForm} />
        <Route exact path="/confirm_sign_up" component={ConfirmSignUpForm} />
        <Route exact path="/resend_sign_up" component={ResendSignUpForm} />
      </div>
    </div>
  )
}

export default AuthenticationPage

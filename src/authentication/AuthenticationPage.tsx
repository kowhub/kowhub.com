import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import ConfirmSignUpForm from './ConfirmSignUpForm'
import ResendSignUpForm from './ResendSignUpForm'
import './AuthenticationPage.scss'

const AuthenticationPage = () => {
  return (
    <div className="authentication_page">
      <div>
        <h1>Kowhub</h1>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/sign_up" component={SignUpForm} />
          <Route exact path="/confirm_sign_up" component={ConfirmSignUpForm} />
          <Route exact path="/resend_sign_up" component={ResendSignUpForm} />
          <Route render={() => (
            <Redirect to="/login" />
          )}/>
        </Switch>
      </div>
    </div>
  )
}

export default AuthenticationPage

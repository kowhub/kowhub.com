import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './AuthenticationForm.scss';

const LoginForm = () => {
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ nextStage, setNextStage ] = useState('')

  const { input, updateInput } = useAuthenticationInput()

  const onChange = (e) => {
    updateInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const signIn = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, password } = input
    try {
      await Auth.signIn({ username, password })
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        setNextStage('CONFIRM_SIGN_UP')
      } else {
        setErrorMessage(err.message)
      }
    }
  }

  if (nextStage === 'CONFIRM_SIGN_UP') {
    return <Redirect to='/confirm_sign_up' />
  }

  return (
    <div class="auth_form">
      <h3>Login</h3>

      <div class="auth_msg">{errorMessage}</div>

      <form onSubmit={signIn}>
        <div class="auth_form__input">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={onChange}
            required
          />
        </div>

        <div class="auth_form__input">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={onChange}
            required
          />
        </div>

        <div class="auth_form__button">
          <button type="submit">Login</button>
        </div>
      </form>

      <div class="auth_form__link">
        Don't have an account?{" "}
        <Link to="/sign_up">Create account</Link>
      </div>
    </div>
  )
}

export default LoginForm

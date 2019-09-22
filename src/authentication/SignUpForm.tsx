import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './AuthenticationForm.scss'

const SignUpForm = () => {
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ nextStage, setNextStage ] = useState('')

  const { input, updateInput } = useAuthenticationInput()

  const onChange = (e) => {
    updateInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const createAccount = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, email, password } = input
    try {
      const { userConfirmed } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          preferred_username: username
        }
      })
      setNextStage('CONFIRM_SIGN_UP')
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  if (nextStage === 'CONFIRM_SIGN_UP') {
    return <Redirect to='/confirm_sign_up' />
  }

  return (
    <div className="auth_form">
      <h3>Create account</h3>

      <div className="auth_msg">{errorMessage}</div>

      <form onSubmit={createAccount}>
        <div className="auth_form__input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={onChange}
            required
          />
        </div>

        <div className="auth_form__input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="auth_form__input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={onChange}
            required
          />
        </div>

        <div className="auth_form__button">
          <button type="submit">Create account</button>
        </div>
      </form>

      <div className="auth_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>

      <div className="auth_form__link">
        Already received a validation code?{" "}
        <Link to="/confirm_sign_up">Confirm sign up</Link>
      </div>
    </div>
  )
}

export default SignUpForm

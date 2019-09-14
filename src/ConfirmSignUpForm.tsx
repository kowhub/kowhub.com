import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './AuthenticationForm.scss'

const ConfirmSignUpForm = () => {
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ nextStage, setNextStage ] = useState('')

  const { input, updateInput } = useAuthenticationInput()

  const onChange = (e) => {
    updateInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const confirmSignUp = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, code } = input
    try {
      await Auth.confirmSignUp(username, code)
      setNextStage('LOGIN')
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  if (nextStage === 'LOGIN') {
    return <Redirect to='/login' />
  }

  return (
    <div className="auth_form">
      <h3>Confirm sign up</h3>

      <div className="auth_msg">{errorMessage}</div>

      <form onSubmit={confirmSignUp}>
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
          <label>Confirmation Code</label>
          <input
            type="text"
            name="code"
            placeholder="Enter your code"
            value={input.code}
            onChange={onChange}
            required
          />
        </div>

        <div className="auth_form__button">
          <button type="submit">Confirm</button>
        </div>
      </form>

      <div className="auth_form__link">
        Lost your code?{" "}
        <Link to="/resend_sign_up">Resend</Link>
      </div>

      <div className="auth_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default ConfirmSignUpForm

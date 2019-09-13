import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './AuthenticationForm.scss'

const ResendSignUpForm = () => {
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ nextStage, setNextStage ] = useState('')

  const { input, updateInput } = useAuthenticationInput()

  const onChange = (e) => {
    updateInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const resendSignUp = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username } = input
    try {
      await Auth.resendSignUp(username)
      setNextStage('CONFIRM_SIGN_UP')
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  if (nextStage === 'CONFIRM_SIGN_UP') {
    return <Redirect to='/confirm_sign_up' />
  }

  return (
    <div class="auth_form">
      <h3>Resend validation code</h3>

      <div class="auth_msg">{errorMessage}</div>

      <form onSubmit={resendSignUp}>
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

        <div class="auth_form__button">
          <button type="submit">Resend code</button>
        </div>
      </form>

      <div class="auth_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>

      <div class="auth_form__link">
        Not yet signed up?{" "}
        <Link to="/sign_up">Create account</Link>
      </div>
    </div>
  )
}

export default ResendSignUpForm

import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './ResendSignUpForm.scss'

const ResendSignUpForm = () => {
  const { state, setInput } = useAuthenticationInput()

  const onChange = (e) => {
    setInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const resendSignUp = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username } = state
    try {
      await Auth.resendSignUp(username)
      // probably set some state here to show message
    } catch (err) {
      console.log('error resending sign up ', err)
    }
  }

  return (
    <div class="resend_sign_up_form">
      <h3>Resend validation code</h3>

      <form onSubmit={resendSignUp}>
        <div class="resend_sign_up_form__input">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={onChange}
            required
          />
        </div>

        <div class="resend_sign_up_form__button">
          <button type="submit">Resend code</button>
        </div>
      </form>

      <div class="resend_sign_up_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>

      <div class="resend_sign_up_form__link">
        Not yet signed up?{" "}
        <Link to="/sign_up">Create account</Link>
      </div>
    </div>
  )
}

export default ResendSignUpForm

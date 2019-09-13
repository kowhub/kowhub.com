import React, { useReducer } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './ConfirmSignUpForm.scss'

const ConfirmSignUpForm = () => {
  const { state, setInput } = useAuthenticationInput()

  const onChange = (e) => {
    setInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const confirmSignUp = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, code } = state
    try {
      await Auth.confirmSignUp({
        username,
        code,
        options: {
          forceAliasCreation: true
        }
      })
    } catch (err) {
      console.log('error confirming sign up, ', err)
    }
  }

  return (
    <div class="confirm_sign_up_form">
      <h3>Confirm sign up</h3>

      <form onSubmit={confirmSignUp}>
        <div class="confirm_sign_up_form__input">
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

        <div class="confirm_sign_up_form__input">
          <label for="code">Confirmation Code</label>
          <input
            type="text"
            name="code"
            placeholder="Enter your code"
            value={state.code}
            onChange={onChange}
            required
          />
        </div>

        <div class="confirm_sign_up_form__button">
          <button type="submit">Confirm</button>
        </div>
      </form>

      <div class="confirm_sign_up_form__link">
        Lost your code?{" "}
        <Link to="/resend_sign_up">Resend</Link>
      </div>

      <div class="confirm_sign_up_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default ConfirmSignUpForm

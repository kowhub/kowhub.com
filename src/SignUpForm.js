import React from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './AuthenticationForm.scss'

const SignUpForm = () => {
  const { state, setInput } = useAuthenticationInput()

  const onChange = (e) => {
    setInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const createAccount = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, email, password } = state
    try {
      const { userConfirmed } = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
      if (userConfirmed) {
      } else {
      }
    } catch (err) {
      console.log('error creating account, ', err)
    }
  }

  return (
    <div class="auth_form">
      <h3>Create account</h3>

      <form onSubmit={createAccount}>
        <div class="auth_form__input">
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

        <div class="auth_form__input">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
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
            value={state.password}
            onChange={onChange}
            required
          />
        </div>

        <div class="auth_form__button">
          <button type="submit">Create account</button>
        </div>
      </form>

      <div class="auth_form__link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </div>

      <div class="auth_form__link">
        Already received a validation code?{" "}
        <Link to="/confirm_sign_up">Confirm sign up</Link>
      </div>
    </div>
  )
}

export default SignUpForm

import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import './SignUpForm.scss'

const credentialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, [action.inputName]: action.inputValue }
    default:
      return state
  }
}

const SignUpForm = () => {
  const initialState = {
    username: '',
    email: '',
    password: ''
  }

  const [state, dispatch] = useReducer(credentialsReducer, initialState)

  const onChange = (e) => {
    dispatch({
      type: 'SET_INPUT',
      inputName: e.target.name,
      inputValue: e.target.value
    })
  }

  const createAccount = async (evt) => {
    evt.preventDefault()
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
    <div class="sign_up_form">
      <h3>Sign Up</h3>

      <form onSubmit={createAccount}>
        <div class="sign_up_form__input">
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

        <div class="sign_up_form__input">
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

        <div class="sign_up_form__input">
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

        <div class="sign_up_form__button">
          <button type="submit">Create account</button>
        </div>
      </form>

      <div class="sign_up_form__link">
        Already have an account?
        <Link to="/login">  Login</Link>
      </div>
    </div>
  )
}

export default SignUpForm

import React, { useReducer } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import './ConfirmSignUpForm.scss'

const credentialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, [action.inputName]: action.inputValue }
    default:
      return state
  }
}

const ConfirmSignUpForm = () => {
  const initialState = {
    username: '',
    code: ''
  }

  const [state, dispatch] = useReducer(credentialsReducer, initialState)

  const onChange = (e) => {
    dispatch({
      type: 'SET_INPUT',
      inputName: e.target.name,
      inputValue: e.target.value
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
      <h3>Confirm Sign Up</h3>

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
          <label for="confirmation">Confirmation Code</label>
          <input
            type="text"
            name="confirmation"
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
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default ConfirmSignUpForm

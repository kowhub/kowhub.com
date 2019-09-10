import React, { useReducer } from 'react';
import { Auth } from 'aws-amplify'

const credentialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, [action.inputName]: action.inputValue }
    default:
      return state
  }
}

const LoginForm = () => {
  const initialState = {
    username: '',
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

  const signIn = async (evt) => {
    evt.preventDefault()
    const { username, password } = state
    try {
      await Auth.signIn({ username, password })
    } catch (err) {
      console.log('error signing up user, ', err)
    }
  }

  return (
    <form onSubmit={signIn}>
      <div class="login_form__input">
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

      <div class="login_form__input">
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

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm

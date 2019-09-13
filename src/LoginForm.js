import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useAuthenticationInput from './useAuthenticationInput'
import './LoginForm.scss';

const LoginForm = () => {
  const { state, setInput } = useAuthenticationInput()

  const onChange = (e) => {
    setInput({
      name: e.target.name,
      value: e.target.value
    })
  }

  const signIn = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    const { username, password } = state
    try {
      await Auth.signIn({ username, password })
    } catch (err) {
      //if (err['__type'] === 'UserNotConfirmedException') {
        //return <Redirect to='/confirm_sign_up' />
      //}
      console.log('error signing up user, ', err)
    }
  }

  return (
    <div class="login_form">
      <h3>Login</h3>

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

        <div class="login_form__button">
          <button type="submit">Login</button>
        </div>
      </form>

      <div class="login_form__link">
        Don't have an account?{" "}
        <Link to="/sign_up">Create account</Link>
      </div>
    </div>
  )
}

export default LoginForm

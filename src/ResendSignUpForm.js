import React, { useReducer } from 'react'

const credentialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, [action.inputName]: action.inputValue }
    default:
      return state
  }
}

const ResendSignUpForm = () => {
  const initialState = {
    username: '',
  }

  const [state, dispatch] = useReducer(credentialsReducer, initialState)

  const onChange = (e) => {
    dispatch({
      type: 'SET_INPUT',
      inputName: e.target.name,
      inputValue: e.target.value
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
    <div>
      <a href="" onClick={(evt) => resendSignUp(evt)}> Resend code</a>
    </div>
  )
}

export default ResendSignUpForm

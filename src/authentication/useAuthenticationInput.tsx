import { useReducer } from "react"

const inputReducer = (state, action) => {
  return { ...state, [action.name]: action.value }
}

const useAuthenticationInput = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    code: ''
  }

  const [input, dispatch] = useReducer(inputReducer, initialState)

  const updateInput = ({ name, value }) => {
    if (initialState.hasOwnProperty(name)) {
      dispatch({ name, value })
    }
  }

  return { input, updateInput }
}

export default useAuthenticationInput

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

  const [state, dispatch] = useReducer(inputReducer, initialState);

  const setInput = ({ name, value }) => {
    if (initialState.hasOwnProperty(name)) {
      dispatch({ name, value })
    }
  }

  return { state, setInput }
}

export default useAuthenticationInput

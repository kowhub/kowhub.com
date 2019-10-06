import { useReducer, useEffect } from 'react'
import { ApolloClient } from 'apollo-client'
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { LIST_DRAFTS_QUERY } from '../queries'

const rehydrateReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'REHYDRATE_INIT':
      return {
        ...state,
        isLoading: true
      }
    case 'REHYDRATE_COMPLETE':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRehydrated: true
      }
    case 'REHYDRATE_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isRehydrated: false
      }
    default:
      return state
  }
}

const DRAFT_DATA_QUERY = gql`
  query ListDrafts {
    listDrafts {
      items {
        id
        createdAt
        updatedAt
        name
        army
        pointsLimit
        rulesVersion
        dna
        status
      }
    }
  }
`

const useRehydratedCache = () => {
  const initialState = {
    isLoading: true,
    isError: false,
    isRehydrated: false
  }
  const [state, dispatch] = useReducer(rehydrateReducer, initialState)

  const client = useApolloClient()

  const rehydrate = async () => {
    return client.query({
      //query: DRAFT_DATA_QUERY,
      query: LIST_DRAFTS_QUERY,
      fetchPolicy: 'cache-first',
    })
  }

  useEffect(() => {
    if (client instanceof ApolloClient) {
      (async () => {
        try {
          await rehydrate()
          dispatch({ type: 'REHYDRATE_COMPLETE' })
        } catch (error) {
          dispatch({ type: 'REHYDRATE_ERROR' })
        }
      })()
    } else {
      dispatch({ type: 'REHYDRATE_ERROR' })
    }
  }, [])

  return state
}

export default useRehydratedCache

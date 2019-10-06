import { useReducer, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { AUTH_TYPE } from 'aws-appsync'
import { createAppSyncLink } from "aws-appsync"
import awsconfig from './aws-build-config'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// https://github.com/apollographql/apollo-cache-persist
import { persistCache } from 'apollo-cache-persist'
import IndexedDBStorage from './IndexedDBStorage'

const reducer = (state, action) => {
  console.log(action.type)
  switch(action.type) {
    case 'CLIENT_SETUP_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        client: action.payload.client
      }
    }
    case 'CLIENT_SETUP_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    default: {
      return state
    }
  }
}

const useKowhubApiClient = () => {
  const initialState = {
    client: undefined,
    isLoading: true,
    error: undefined
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let isMounted = true

    const configureClient = async () => {
      const awsLink = createAppSyncLink({
        url: awsconfig.aws_appsync_graphqlEndpoint,
        region: awsconfig.aws_appsync_region,
        auth: {
          type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
          jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
        },
        complexObjectsCredentials: () => Auth.currentCredentials(),
      })

      // https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/450
      const httpLink = createHttpLink({
        uri: awsconfig.aws_appsync_graphqlEndpoint,
      })

      const cache = new InMemoryCache({ freezeResults: true })

      await persistCache({
        cache,
        storage: IndexedDBStorage,
      })

      const client = new ApolloClient({
        link: awsLink.concat(httpLink),
        cache,
        assumeImmutableResults: true
      })

      // Set client-only initial state
      client.writeData({
        data: {
          currentDraftId: ''
        }
      })

      if (isMounted) {
        dispatch({ type: 'CLIENT_SETUP_SUCCESS', payload: { client } })
      }
    }

    try {
      configureClient()
    } catch (error) {
      if (isMounted) {
        dispatch({ type: 'CLIENT_SETUP_ERROR', payload: { error } })
      }
    }

    return () => { isMounted = false }
  }, [])

  return state
}

export default useKowhubApiClient

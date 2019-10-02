import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './redux/store'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-build-config'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from '@apollo/react-hooks'
import { AWSAppSyncClient, buildSync, AUTH_TYPE } from 'aws-appsync'
import * as localForage from 'localforage'
import * as DeltaSync from './graphql/DeltaSync'

import { createAppSyncLink } from "aws-appsync"
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// https://github.com/apollographql/apollo-cache-persist
import { persistCache } from 'apollo-cache-persist'

import gql from 'graphql-tag'

Amplify.configure(awsconfig)


//const client = new AWSAppSyncClient({
const awsLink = createAppSyncLink({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
    //jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken()
    //apiKey: awsconfig.aws_appsync_apiKey
  },
  /*
  offlineConfig: {
    storage: localForage,
    callback: (error, success) => {
      if(error) {
        const { mutation, variables } = error;
        console.warn(`offlineConfig callback ERROR for ${mutation}`, error);
      } else {
        const { mutation, variables } = success;
        console.info(`offlineConfig callback SUCCESS for ${mutation}`, success);
      }
    },
  },
  //disableOffline: true
  */
})

  /*
const typeDefs = gql`
  extend type Query {
    currentDraftId: String
  }
`

const resolvers = {
  Query: {
   currentDraftId: () => null
  },
  //Mutation: {
  //updateCurrentDraft: (_root, { id }, { client, cache, getCacheKey }) => {
      //const data = { id, __typename: 'CurrentDraft' }
      //cache.writeData({ data })
      //const { currentDraftId } = client.readQuery({
      //query: GET_CURRENT_DRAFT_ID
      //})
  //}
  //}
}
*/

// https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/450
const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
})

const client = new ApolloClient({
  link: awsLink.concat(httpLink),
  cache: new InMemoryCache({
    freezeResults: true
  }),
  //typeDefs,
  //resolvers,
  assumeImmutableResults: true,
  connectToDevTools: true
})

client.writeData({
  data: {
    currentDraftId: ''
  }
})
  /*
*/

  /*
client.hydrated().then(() =>
  client.sync(
    buildSync('Draft', {
      baseQuery: {
        query: DeltaSync.BaseQuery
      },
      subscriptionQuery: {
        query: DeltaSync.Subscription
      },
      deltaQuery: {
        query: DeltaSync.DeltaSync
      },
      cacheUpdates: ({ id }) => [
        { query: DeltaSync.GetItem, variables: { id } }
      ]
    })
  )
)
*/

ReactDOM.render(
  <ApolloProvider client={client}>
      <Router basename='/'>
        <App />
      </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
    //<Rehydrated client={client}>
    //</Rehydrated>
// Well, Rehydrated seems to be bugged

/*
 * Example with custom loading page while waiting for Rehydrated
 *  - Rehydrated shows loading page until cache has been read etc
 *
const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated
      render={({ rehydrated }) => (
        rehydrated ? <App /> : <strong>Your custom UI componen here...</strong>
      )}
    />
  </ApolloProvider>
);
 *
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

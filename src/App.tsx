import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BuilderAppWrapper from './builder/BuilderAppWrapper'
import useAmplifyAuth from './authentication/useAmplifyAuth'
import AuthenticationPage from './authentication/AuthenticationPage'
import AppHeader from './AppHeader'
import './App.scss'
import LoadingPage from './LoadingPage'
import { ApolloProvider } from '@apollo/react-hooks'

import useKowhubApiClient from './useKowhubApiClient'

const App = () => {
  const { state: { user, isLoading }, handleSignout } = useAmplifyAuth()

  const {
    client,
    isLoading: isClientLoading,
    error: clientError
  } = useKowhubApiClient()

  if (isLoading || !client) {
    return <LoadingPage message={'Loading client...'} />
  }

  if (!user) {
    return <AuthenticationPage />
  }

  return  (
  <ApolloProvider client={client}>
    <div>
      <AppHeader handleSignout={handleSignout} />
      <Switch>
        <Route
          exact path="/builder"
          component={BuilderAppWrapper}
        />
        <Route render={() => (
          <Redirect to="/builder" />
        )}/>
      </Switch>
    </div>
  </ApolloProvider>
  )
}

export default App

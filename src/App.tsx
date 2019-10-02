import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BuilderAppWrapper from './builder/BuilderAppWrapper'
import useAmplifyAuth from './authentication/useAmplifyAuth'
import AuthenticationPage from './authentication/AuthenticationPage'
import AppHeader from './AppHeader'
import './App.scss'
import { useApolloClient } from '@apollo/react-hooks'
import useClientRehydrated from './useClientRehydrated'
import LoadingPage from './LoadingPage'

const App = () => {
  //const { isRehydrated } = useClientRehydrated()
  const isRehydrated = true

  const { state: { user, isLoading/*, isError*/ }, handleSignout } = useAmplifyAuth()
  console.log('User: ' + user)

  if (isLoading || !isRehydrated) {
    return <LoadingPage message={'Rehydrating...'} />
  }

  if (!user) {
    return <AuthenticationPage />
  }

  return  (
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
  )
}
//render={(props) => <BuilderAppWrapper {...props} client={client} />}

export default App

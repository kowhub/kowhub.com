import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Builder from './builder/Builder'
import useAmplifyAuth from './useAmplifyAuth'
import AuthenticationPage from './AuthenticationPage'
import AppHeader from './AppHeader'
import './App.scss'

const App = () => {
  const { state: { user, /*isLoading, isError*/ }, handleSignout } = useAmplifyAuth()
  console.log('User: ' + user)

  if (!user) {
    return <AuthenticationPage />
  }

  return  (
    <div>
      <AppHeader handleSignout={handleSignout} />
      <Switch>
        <Route exact path="/builder" component={Builder} />
        <Route render={() => (
          <Redirect to="/builder" />
        )}/>
      </Switch>
    </div>
  )
}

export default App

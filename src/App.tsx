import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BuilderApp from './builder/BuilderApp'
import useAmplifyAuth from './authentication/useAmplifyAuth'
import AuthenticationPage from './authentication/AuthenticationPage'
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
        <Route exact path="/builder" component={BuilderApp} />
        <Route render={() => (
          <Redirect to="/builder" />
        )}/>
      </Switch>
    </div>
  )
}

export default App

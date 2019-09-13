import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';

import Builder from './Builder'
import LogoutButton from './LogoutButton'
import useAmplifyAuth from './useAmplifyAuth'
import AuthenticationPage from './AuthenticationPage'

const App = () => {
  const { state: { isLoading, isError, user}, handleSignout } = useAmplifyAuth();
  console.log('User: ' + user);

  return !user ? (
    <Router basename='/'>
      <AuthenticationPage />
    </Router>
  ) : (
    <Router basename='/'>
      <div>
        <LogoutButton handleSignout={handleSignout}/>
        <Builder />
      </div>
    </Router>
  );
}

export default App;

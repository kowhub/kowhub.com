import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import Builder from './Builder'
import LogoutButton from './LogoutButton'
import useAmplifyAuth from './useAmplifyAuth'
import LoginPage from './LoginPage'

const App = () => {
  const { state: { isLoading, isError, user}, handleSignout } = useAmplifyAuth();
  console.log('User: ' + user);

  return !user ? (
    <LoginPage />
  ) : (
    <div>
      <LogoutButton handleSignout={handleSignout}/>
      <Builder />
    </div>
  );
}

export default App;

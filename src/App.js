import React, { useEffect } from 'react';
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
    <AuthenticationPage />
  ) : (
    <div>
      <LogoutButton handleSignout={handleSignout}/>
      <Builder />
    </div>
  );
}

export default App;

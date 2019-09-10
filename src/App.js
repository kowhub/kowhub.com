import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Builder from './Builder'
import LogoutButton from './LogoutButton'
import useAmplifyAuth from './useAmplifyAuth'
import LoginForm from './LoginForm'

const App = () => {
  const { state: { isLoading, isError, user}, handleSignout } = useAmplifyAuth();
  console.log('User: ' + user);

  return !user ? (
    <LoginForm />
  ) : (
    <div>
      <LogoutButton handleSignout={handleSignout}/>
      <Builder />
    </div>
  );
}

export default App;

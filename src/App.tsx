import React from 'react';
import './App.scss';

import Builder from './Builder'
import LogoutButton from './LogoutButton'
import useAmplifyAuth from './useAmplifyAuth'
import AuthenticationPage from './AuthenticationPage'

const App = () => {
  const { state: { user, /*isLoading, isError*/ }, handleSignout } = useAmplifyAuth();
  console.log('User: ' + user);

  if (!user) {
    return <AuthenticationPage />
  }

  return  (
    <div>
      <LogoutButton handleSignout={handleSignout}/>
      <Builder />
    </div>
  );
}

export default App;

import React from 'react'

const LogoutButton = ({handleSignout}) => {
  return (
    <button onClick={handleSignout}>Log out</button>
  )
}

export default LogoutButton

import React from 'react'

const LogoutButton = ({handleSignout}) => {
  return (
    <div>
      <button onClick={handleSignout}>Log out</button>
    </div>
  )
}

export default LogoutButton

import React from 'react'
import Logo from './Logo'
import LogoutButton from './LogoutButton'
import './AppHeader.scss'

const AppHeader = ({ handleSignout }) => {
  return (
    <div className="app_header">
      <div className="app_header__right">
        <Logo />
      </div>
      <div className="app_header__left">
        <LogoutButton handleSignout={handleSignout} />
      </div>
    </div>
  )
}

export default AppHeader

import React from 'react'
import Browser from './Browser'
import UserLists from './UserLists'
import CurrentList from './CurrentList'
import './Builder.scss'

const Builder = () => {
  return (
    <div className="builder">
      <Browser />
      <UserLists />
      <CurrentList />
    </div>
  )
}

export default Builder

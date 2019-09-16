import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import CurrentDraft from './CurrentDraft'
import './Builder.scss'

const Builder = () => {
  return (
    <div className="builder">
      <UserDrafts />
      <Browser />
      <CurrentDraft />
    </div>
  )
}

export default Builder

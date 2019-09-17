import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import CurrentDraft from './CurrentDraft'
import './Builder.scss'

import { createDataRepositoryForVersion } from '../source_data/DataRepositoryFactory'

const Builder = () => {
  const dataRepo = createDataRepositoryForVersion()

  return (
    <div className="builder">
      <UserDrafts />
      <Browser dataRepo={dataRepo} />
      <CurrentDraft dataRepo={dataRepo} />
    </div>
  )
}

export default Builder

import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import DraftDetail from './DraftDetail'
import DraftSummary from './DraftSummary'
import './BuilderApp.scss'

import { createDataRepositoryForVersion } from '../source_data/DataRepositoryFactory'

const BuilderApp = () => {
  const dataRepo = createDataRepositoryForVersion()

  return (
    <div className="builder_app">
      <UserDrafts />
      <Browser dataRepo={dataRepo} />
      <DraftDetail dataRepo={dataRepo} />
      <DraftSummary />
    </div>
  )
}

export default BuilderApp

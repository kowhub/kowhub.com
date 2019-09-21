import React from 'react'
import Browser from './Browser'
import DraftDetail from './DraftDetail'
import { DataRepository } from '../source_data/DataRepository'

const BuilderPanel = (
  props: {
    dataRepo = DataRepository
  }
) => {
  const { dataRepo } = props

  return (
    <div className="builder_panel">
      <Browser dataRepo={dataRepo} />
      <DraftDetail dataRepo={dataRepo} />
    </div>
  )
}

export default BuilderPanel


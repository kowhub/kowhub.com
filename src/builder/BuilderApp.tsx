import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import DraftDetail from './DraftDetail'
import DraftSummary from './DraftSummary'
import { DataRepository } from '../source_data/DataRepository'
import { Draft } from '../types/Draft'
import './BuilderApp.scss'

import useWorkingDraft from '../apollo/hooks/useWorkingDraft'


const BuilderApp = (
  props: {
    dataRepo: DataRepository,
  }
) => {
  const { dataRepo } = props

  const {
    workingDraft,
    removeUnit,
    addUnit,
    updateUnit,
  } = useWorkingDraft(dataRepo)

  const units = workingDraft ? workingDraft.units : null
  //debugger

  const currentDraftMeta = null

  const currentDraftUnits = null

  return (
    <div className="builder_app">
      <div className="builder_panel">
        <UserDrafts />
        <Browser dataRepo={dataRepo} addUnit={addUnit} />
        <DraftDetail
          draft={workingDraft}
          removeUnit={removeUnit}
          updateUnit={updateUnit}
        />
      </div>
      <DraftSummary draft={workingDraft} />
    </div>
  )
}

export default BuilderApp

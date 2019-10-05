import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import DraftDetail from './DraftDetail'
import DraftSummary from './DraftSummary'
import { DataRepository } from '../source_data/DataRepository'
import { Draft } from '../source_data/Draft'
import './BuilderApp.scss'

import useUserDraftsMeta from '../apollo/hooks/useUserDraftsMeta'
import useCurrentDraftId from '../apollo/hooks/useCurrentDraftId'


const BuilderApp = (
  props: {
    dataRepo: DataRepository,
  }
) => {
  const { dataRepo } = props

  const { drafts, loading, error } = useUserDraftsMeta()
  const { currentDraftId } = useCurrentDraftId()

  const currentDraft = drafts.find(draft => draft.id === currentDraftId)

  const currentDraftMeta = null

  const currentDraftUnits = null

  return (
    <div className="builder_app">
      <div className="builder_panel">
        <UserDrafts />
        <Browser dataRepo={dataRepo} />
        <DraftDetail draft={currentDraft}/>
      </div>
      <DraftSummary draft={currentDraft} />
    </div>
  )
}

export default BuilderApp

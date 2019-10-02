import React from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import DraftDetail from './DraftDetail'
import DraftSummary from './DraftSummary'
import { DataRepository } from '../source_data/DataRepository'
import { Draft } from '../source_data/Draft'
import './BuilderApp.scss'

import useUserDrafts from '../apollo/hooks/useUserDrafts'
import useCurrentDraftId from '../apollo/hooks/useCurrentDraftId'


const BuilderApp = (
  props: {
    dataRepo: DataRepository,
  }
) => {
  const { dataRepo } = props

  const { drafts, loading, error } = useUserDrafts()
  const { currentDraftId } = useCurrentDraftId()

  const currentDraft = drafts.find(draft => draft.id === currentDraftId)

  const currentDraftMeta = currentDraft
    ? { ...currentDraft.meta, pointsTotal: dataRepo.getDraftPoints(currentDraft) }
    : null

  const currentDraftUnits = currentDraft ? currentDraft.units : null

  return (
    <div className="builder_app">
      <div className="builder_panel">
        <UserDrafts drafts={drafts} currentDraftId={currentDraftId} />
        <Browser dataRepo={dataRepo} />
        <DraftDetail dataRepo={dataRepo} meta={currentDraftMeta} units={currentDraftUnits} />
      </div>
      <DraftSummary meta={currentDraftMeta} />
    </div>
  )
}

export default BuilderApp

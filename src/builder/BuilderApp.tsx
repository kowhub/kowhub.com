import React from 'react'
import { connect } from 'react-redux'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import DraftDetail from './DraftDetail'
import DraftSummary from './DraftSummary'
import { DataRepository } from '../source_data/DataRepository'
import { Draft } from '../source_data/Draft'
import './BuilderApp.scss'

const BuilderApp = (
  props: {
    dataRepo: DataRepository,
    drafts: Draft[],
    currentDraftId: string
  }
) => {
  const { dataRepo, drafts, currentDraftId } = props

  const currentDraft = drafts.find(draft => draft.id === currentDraftId)

  const currentDraftMeta = currentDraft
    ? { ...currentDraft.meta, points_total: dataRepo.getDraftPoints(currentDraft) }
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

export default connect(
  state => ({
    drafts: state.builder.drafts,
    currentDraftId: state.builder.currentDraftId
  })
)(BuilderApp)

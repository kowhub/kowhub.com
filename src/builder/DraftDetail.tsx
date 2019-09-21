import React from 'react'
import DraftDetailUnits from './DraftDetailUnits'
import { connect } from 'react-redux'
import { getCurrentDraft } from '../redux/selectors'
import { Draft } from '../source_data/Draft'
import { DataRepository } from '../source_data/DataRepository'

const DraftDetail = (
  props: {
    dataRepo: DataRepository,
    draft: Draft | null
  }
) => {
  const { dataRepo, draft } = props

  if (!draft) {
    return (
      <div className="current_list">
        <div><b>Current List</b></div>
        <div>(no list selected)</div>
      </div>
    )
  }

  const draftPointsTotal = dataRepo.getDraftPoints(draft)

  return (
    <div className="current_list">
      <div><b>Current List</b></div>
      <div>Name: <em>{draft.meta.name}</em></div>
      <div>Points limit: <em>{draft.meta.points_limit}</em></div>
      <DraftDetailUnits dataRepo={dataRepo} units={draft.units} />
      <div>Points total: <em>{draftPointsTotal}</em></div>
    </div>
  )
}

export default connect(
  state => ({ draft: getCurrentDraft(state) })
)(DraftDetail)

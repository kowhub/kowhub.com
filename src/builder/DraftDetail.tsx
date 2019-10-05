import React from 'react'
import DraftDetailUnits from './DraftDetailUnits'
import { Draft } from '../source_data/Draft'

const DraftDetail = (
  props: {
    draft: Draft
  }
) => {
  const { draft } = props

  if (!draft) {
    return (
      <div className="current_list">
        <div><b>Current List</b></div>
        <div>(no list selected)</div>
      </div>
    )
  }

  return (
    <div className="current_list">
      <div><b>Current List</b></div>
      <div>Name: <em>{draft.name}</em></div>
      <div>Points limit: <em>{draft.pointsLimit}</em></div>
      <DraftDetailUnits units={[]} />
      <div>Points total: <em>{draft.pointsTotal}</em></div>
    </div>
  )
}

export default DraftDetail

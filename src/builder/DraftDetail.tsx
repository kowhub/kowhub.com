import React from 'react'
import DraftDetailUnits from './DraftDetailUnits'
import { WorkingDraft } from '../types/Draft'

const DraftDetail = (
  props: {
    draft: WorkingDraft,
    removeUnit,
    updateUnit,
  }
) => {
  const { draft, removeUnit, updateUnit } = props

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
      <DraftDetailUnits
        units={draft.units}
        removeUnit={removeUnit}
        updateUnit={updateUnit}
      />
      <div>Points total: <em>{draft.pointsTotal}</em></div>
    </div>
  )
}

export default DraftDetail

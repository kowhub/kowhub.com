import React from 'react'
import { WorkingDraft } from '../types/Draft'
import './DraftSummary.scss'
import useCurrentDraftId from '../apollo/hooks/useCurrentDraftId'

const DraftSummary = (
  props: {
    draft: WorkingDraft
  }
) => {
  const { draft } = props

  if (!draft) {
    return (
      <div className="draft_summary">
        <div>
          <div><b>Draft Summary</b></div>
          <div>(no list selected)</div>
        </div>
      </div>
    )
  }

  return (
    <div className="draft_summary">
      <div>
        <div><b>Draft Summary</b></div>
        <div>Name: {draft.name}</div>
        <div>Points: {draft.pointsTotal || 0}/{draft.pointsLimit}</div>
      </div>
    </div>
  )
}

export default DraftSummary

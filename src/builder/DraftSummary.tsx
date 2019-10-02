import React from 'react'
import { DraftMeta } from '../source_data/Draft'
import './DraftSummary.scss'
import useCurrentDraftId from '../apollo/hooks/useCurrentDraftId'

const DraftSummary = (
  props: {
    meta: DraftMeta | null
  }
) => {
  const { meta } = props

  if (!meta) {
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
        <div>Name: {meta.name}</div>
        <div>Points: {meta.pointsTotal || 0}/{meta.pointsLimit}</div>
      </div>
    </div>
  )
}

export default DraftSummary

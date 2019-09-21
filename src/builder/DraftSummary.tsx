import React from 'react'
import { DraftMeta } from '../source_data/Draft'
import './DraftSummary.scss'

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
        <div>Points: {meta.points_total || 0}/{meta.points_limit}</div>
      </div>
    </div>
  )
}

export default DraftSummary

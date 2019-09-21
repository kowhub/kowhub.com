import React from 'react'
import { connect } from 'react-redux'
import { Draft } from '../source_data/Draft'
import { getCurrentDraft } from '../redux/selectors'

const DraftSummary = (
  props: {
    draft: Draft | null
  }
) => {
  const { draft } = props

  if (!draft) {
    return (
      <div className="draft_summary">
        <div><b>Draft Summary</b></div>
        <div>(no list selected)</div>
      </div>
    )
  }

  return (
    <div className="draft_summary">
      <div><b>Draft Summary</b></div>
      <div>Name: {draft.meta.name}</div>
      <div>Points limit: {draft.meta.points_limit}</div>
    </div>
  )
}

export default connect(
  state => ({ draft: getCurrentDraft(state) })
)(DraftSummary)

import React, { MouseEvent } from 'react'
import { DraftMeta } from '../source_data/Draft'

const UserDraftEntry = (
  props: {
    meta: DraftMeta,
    isSelected: boolean,
    selectDraft(evt: MouseEvent): void,
    removeDraft(evt: MouseEvent): void
  }
) => {
  const { meta, isSelected, selectDraft, removeDraft } = props

  return (
    <li onClick={selectDraft} className={isSelected ? 'selected' : null}>
      <button onClick={removeDraft}>X</button>
      { '[' + meta.pointsLimit + '] ' + meta.name }
    </li>
  )
}

export default UserDraftEntry

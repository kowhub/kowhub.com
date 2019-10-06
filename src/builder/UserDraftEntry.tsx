import React, { MouseEvent } from 'react'
import { Draft } from '../types/Draft'

const UserDraftEntry = (
  props: {
    draft: Draft,
    isSelected: boolean,
    selectDraft(evt: MouseEvent): void,
    removeDraft(evt: MouseEvent): void
  }
) => {
  const { draft, isSelected, selectDraft, removeDraft } = props

  return (
    <li onClick={selectDraft} className={isSelected ? 'selected' : null}>
      <button onClick={removeDraft}>X</button>
      { '[' + draft.pointsLimit + '] ' + draft.name }
    </li>
  )
}

export default UserDraftEntry

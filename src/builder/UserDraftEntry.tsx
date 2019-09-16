import React from 'react'

const UserDraftEntry = ({ name, isSelected, selectDraft, removeDraft }) => {
  return (
    <li onClick={selectDraft} className={isSelected ? 'selected' : null}>
      <button onClick={removeDraft}>X</button>
      {name}
    </li>
  )
}

export default UserDraftEntry

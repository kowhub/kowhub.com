import React from 'react'

const CurrentDraftEntry = ({ unitKey, removeUnit }) => {
  const name = unitKey

  return (
    <li data-unitkey={unitKey}>
      <button onClick={removeUnit}>X</button>
      {name}
    </li>
  )
}

export default CurrentDraftEntry

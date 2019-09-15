import React from 'react'

const CurrentListEntry = ({ unitKey, removeUnit }) => {
  const name = unitKey

  return (
    <li data-unitkey={unitKey}>
      <button onClick={removeUnit}>X</button>
      {name}
    </li>
  )
}

export default CurrentListEntry

import React from 'react'

const BrowserArmyEntry = ({ name, viewUnits }) => {
  const handleClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    viewUnits()
  }

  return (
    <li>
      <button onClick={handleClick}>+</button>
      {name}
    </li>
  )
}

export default BrowserArmyEntry

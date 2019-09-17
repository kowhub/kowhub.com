import React from 'react'

const BrowserUnitEntry = ({ name, addUnit }) => {
  const handleClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    addUnit()
  }

  return (
    <li>
      <button onClick={handleClick}>+</button>
      {name}
    </li>
  )
}

export default BrowserUnitEntry

import React from 'react'

const BrowserUnitEntry = ({ unitFormKey, addUnit }) => {
  return (
    <li data-key={unitFormKey}>
      <button onClick={addUnit}>+</button>
      {unitFormKey}
    </li>
  )
}

export default BrowserUnitEntry

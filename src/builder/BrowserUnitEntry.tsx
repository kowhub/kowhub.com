import React, { MouseEvent } from 'react'

const BrowserUnitEntry = (
  props: {
    name: string,
    addUnit(evt: MouseEvent): void
  }
) => {
  const { name, addUnit } = props

  return (
    <li>
      <button onClick={addUnit}>+</button>
      {name}
    </li>
  )
}

export default BrowserUnitEntry

import React, { MouseEvent } from 'react'

const BrowserArmyEntry = (
  props: {
    name: string,
    viewUnits(evt: MouseEvent): void
  }
) => {
  const { name, viewUnits } = props
  return (
    <li>
      <button onClick={viewUnits}>+</button>
      {name}
    </li>
  )
}

export default BrowserArmyEntry

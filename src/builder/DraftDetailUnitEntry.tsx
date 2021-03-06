import React, { MouseEvent } from 'react'
import { Unit } from '../source_data/Unit'

const DraftDetailUnitEntry = (
  props: {
    unit: Unit,
    removeUnit(evt: MouseEvent): void
  }
) => {
  const { unit, removeUnit } = props
  return (
    <li>
      <button onClick={removeUnit}>X</button>
      { '[' + unit.pts + '] ' + unit.name }
    </li>
  )
}

export default DraftDetailUnitEntry

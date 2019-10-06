import React from 'react'
import DraftDetailUnitEntry from './DraftDetailUnitEntry'
import { Unit } from '../types/Draft'

const DraftDetailUnits = (
  props: {
    units: Unit[],
    removeUnit,
    updateUnit,
  }
) => {
  const { units, removeUnit, updateUnit } = props

  const removeUnitHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      removeUnit(id)
    }
  }

  const listItems = units.map((unit) =>
    <DraftDetailUnitEntry
      key={unit.id}
      unit={unit}
      removeUnit={removeUnitHandler(unit.id)}
    />
  )

  return (
    <ol className="current_draft_unit_panel">
      {listItems}
    </ol>
  )
}

export default DraftDetailUnits

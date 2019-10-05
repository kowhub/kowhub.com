import React from 'react'
import DraftDetailUnitEntry from './DraftDetailUnitEntry'
import useRemoveUnit from '../apollo/hooks/useRemoveUnit'
import { DataRepository } from '../source_data/DataRepository'
import { Unit } from '../source_data/Unit'

const DraftDetailUnits = (
  props: {
    //dataRepo: DataRepository,
    units: Unit[],
  }
) => {
  const { units } = props

  const { removeUnit } = useRemoveUnit()

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

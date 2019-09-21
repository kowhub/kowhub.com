import React from 'react'
import DraftDetailUnitEntry from './DraftDetailUnitEntry'
import { connect } from 'react-redux'
import { removeUnit } from '../redux/actions'
import { DraftUnit } from '../source_data/Draft'
import { DataRepository } from '../source_data/DataRepository'

const DraftDetailUnits = (
  props: {
    dataRepo: DataRepository,
    units: DraftUnit[],
    removeUnit(id: string): void
  }
) => {
  const { dataRepo, units, removeUnit } = props

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
      unit={dataRepo.unpackUnit(unit.dna)}
      removeUnit={removeUnitHandler(unit.id)}
    />
  )

  return (
    <ol className="current_draft_unit_panel">
      {listItems}
    </ol>
  )
}

export default connect(
  null,
  { removeUnit }
)(DraftDetailUnits)

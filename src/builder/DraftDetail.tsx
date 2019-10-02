import React from 'react'
import DraftDetailUnits from './DraftDetailUnits'
import { DraftMeta, DraftUnit } from '../source_data/Draft'
import { DataRepository } from '../source_data/DataRepository'

const DraftDetail = (
  props: {
    dataRepo: DataRepository,
    meta: DraftMeta | null,
    units: DraftUnit[] | null
  }
) => {
  const { dataRepo, meta, units } = props

  if (!meta) {
    return (
      <div className="current_list">
        <div><b>Current List</b></div>
        <div>(no list selected)</div>
      </div>
    )
  }

  return (
    <div className="current_list">
      <div><b>Current List</b></div>
      <div>Name: <em>{meta.name}</em></div>
      <div>Points limit: <em>{meta.pointsLimit}</em></div>
      <DraftDetailUnits dataRepo={dataRepo} units={units} />
      <div>Points total: <em>{meta.pointsTotal}</em></div>
    </div>
  )
}

export default DraftDetail

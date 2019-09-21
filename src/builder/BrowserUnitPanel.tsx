import React from 'react'
import BrowserUnitEntry from './BrowserUnitEntry'
import { connect } from 'react-redux'
import { addUnit } from '../redux/actions'

const BrowserUnitPanel = (
  props: {
    addUnit(unitKeyForm: string): void,
    armyName: string,
    units,
    setArmyView(): void
  }
) => {
  const { addUnit, armyName, units, setArmyView } = props

  const handleSelectArmyView = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    setArmyView()
  }

  const addUnitHandler = (unitKeyForm: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      addUnit(unitKeyForm)
    }
  }

  const renderItems = units.map((unit) => {
    const formKey = Object.keys(unit.forms)[0] // pick only the first form
    const unitKeyForm = unit.key + formKey
    return (
      <BrowserUnitEntry
        key={unitKeyForm}
        name={unit.name}
        addUnit={addUnitHandler(unitKeyForm)}
      />
    )
  })

  return (
    <div className="browser">
      <div><b>{armyName}</b></div>
      <ul>{renderItems}</ul>
      <div>
        <button onClick={handleSelectArmyView}>BACK TO ARMIES</button>
      </div>
    </div>
  )
}

export default connect(
  null,
  { addUnit }
)(BrowserUnitPanel)

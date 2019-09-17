import React from 'react'
import BrowserUnitEntry from './BrowserUnitEntry'
import { connect } from 'react-redux'
import { addUnit } from '../redux/actions'

const BrowserUnitPanel = ({ addUnit, armyName, units, setArmyView }) => {
  const renderItems = units.map((unit) => {
    return (
      <BrowserUnitEntry
        key={unit.key}
        name={unit.name}
        addUnit={() => addUnit(unit.key)}
      />
    )
  })

  const handleClick = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    setArmyView()
  }

  return (
    <div className="browser">
      <div><b>{armyName}</b></div>
      <ul>{renderItems}</ul>
      <div>
        <button onClick={handleClick}>BACK TO ARMIES</button>
      </div>
    </div>
  )
}

export default connect(
  null,
  { addUnit }
)(BrowserUnitPanel)

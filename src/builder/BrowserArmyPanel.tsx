import React from 'react'
import BrowserArmyEntry from './BrowserArmyEntry'

const BrowserArmyPanel = ({ armies, setUnitView }) => {
  const viewUnitsHandler = (armyKey: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      setUnitView(armyKey)
    }
  }

  const renderItems = armies.map((army) => {
    return (
      <BrowserArmyEntry
        key={army.key}
        name={army.name}
        viewUnits={viewUnitsHandler(army.key)}
      />
    )
  })

  return (
    <div className="browser">
      <div><b>Army Selector</b></div>
      <ul>{renderItems}</ul>
    </div>
  )
}

export default BrowserArmyPanel

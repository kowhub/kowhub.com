import React from 'react'
import BrowserArmyEntry from './BrowserArmyEntry'

const BrowserArmyPanel = ({ armies, setUnitView }) => {
  const renderItems = armies.map((army) => {
    return (
      <BrowserArmyEntry
        key={army.key}
        name={army.name}
        viewUnits={() => setUnitView(army.key)}
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

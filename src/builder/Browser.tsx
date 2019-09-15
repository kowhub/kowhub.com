import React from 'react'
import BrowserUnitEntry from './BrowserUnitEntry'

/*
 * State suggestion:
 *  - view type: 'armies_view' vs 'units_view'
 *  - items: list of keys
 *      * (example armies view) ['ba', 'dw', 'ab', ...]
 *      * (example units view) ['dwsb', 'dwib', 'dwog', ...]
 */
const Browser = ({ addUnit }) => {
  const units = [
    'dwsb',
    'dwib',
    'dwog',
    'dwws',
  ]

  const listItems = units.map((unitKey) => {
    const unitFormKey = unitKey// + 'r'
    return (
      <BrowserUnitEntry
        key={unitKey}
        unitFormKey={unitFormKey}
        addUnit={() => addUnit(unitKey)}
      />
    )
  })

  return (
    <div className="browser">
      <div><b>Unit Selector</b></div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Browser

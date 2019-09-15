import React from 'react'
import CurrentListEntry from './CurrentListEntry'

/*
 * State suggestion:
 *  - selected user list
 *    {
 *      id: '12345678',
 *      name: 'my list',
 *      points_limit: 2000,
 *      units: {
 *        'id600': {...},
 *        'id601': {...},
 *      }
 *    }
 *
 *    (potentially _just_ the ID to use as reference)
 */
const CurrentList = ({ currentList, removeUnit }) => {
  const removeUnitHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      removeUnit(id)
    }
  }

  const listItems = currentList ? (
    currentList.units.map((unit) =>
      <CurrentListEntry
        key={unit.id}
        unitKey={unit.unitKey}
        removeUnit={removeUnitHandler(unit.id)}
      />
    )
  ) : (
    ''
  )

  return (
    <div className="current_list">
      <div><b>CurrentList</b></div>
      <div>Name: <em>{currentList ? currentList.name : '(no list selected)'}</em></div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default CurrentList

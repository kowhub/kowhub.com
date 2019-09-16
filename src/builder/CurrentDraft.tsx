import React from 'react'
import CurrentDraftEntry from './CurrentDraftEntry'

/*
 * State suggestion:
 *  - selected user draft
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
const CurrentDraft = ({ draft, removeUnit }) => {
  const removeUnitHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      removeUnit(id)
    }
  }

  const listItems = draft ? (
    draft.units.map((unit) =>
      <CurrentDraftEntry
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
      <div><b>Current List</b></div>
      <div>Name: <em>{draft ? draft.name : '(no list selected)'}</em></div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default CurrentDraft

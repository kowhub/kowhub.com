import React from 'react'
import CurrentDraftEntry from './CurrentDraftEntry'
import { connect } from 'react-redux'
import { removeUnit } from '../redux/actions'
import { getCurrentDraft } from '../redux/selectors'

const CurrentDraft = ({ dataRepo, draft, removeUnit }) => {
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

export default connect(
  state => ({ draft: getCurrentDraft(state) }),
  { removeUnit }
)(CurrentDraft)

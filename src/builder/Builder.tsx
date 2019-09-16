import React, { useReducer } from 'react'
import Browser from './Browser'
import UserDrafts from './UserDrafts'
import CurrentDraft from './CurrentDraft'
import './Builder.scss'

const newRandomId = () => {
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return (Math.random().toString(36).substring(5, 13) + Math.random().toString(36).substring(5, 13))
}

const replaceItem = (list, index, item) => {
  return [...list.slice(0, index), item, ...list.slice(index + 1)]
}

const removeItem = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)]
}

const builderReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_DRAFT': {
      const nextId = newRandomId()
      const newUserDraft = { id: nextId, name: 'my list [' + nextId + ']', units: [] }
      return { ...state, userDrafts: [...state.userDrafts, newUserDraft], currentDraftId: nextId }
    }
    case 'REMOVE_DRAFT': {
      const newDrafts = state.userDrafts.filter(l => l.id !== action.id)
      let newId
      if (newDrafts.length < 1) {
        newId = null
      } else if (action.id === state.currentDraftId) {
        newId = newDrafts[0].id
      } else {
        newId = state.currentDraftId
      }
      return { ...state, currentDraftId: newId, userDrafts: newDrafts }
    }
    case 'SELECT_DRAFT': {
      return { ...state, currentDraftId: action.id }
    }
    case 'ADD_UNIT': {
      const draft = state.userDrafts.find(l => l.id === state.currentDraftId)
      const draftIndex = state.userDrafts.indexOf(draft)
      draft.units = [...draft.units, { id: newRandomId(), unitKey: action.unitKey }]
      return { ...state, userDrafts: replaceItem(state.userDrafts, draftIndex, draft) }
    }
    case 'REMOVE_UNIT': {
      const draft = state.userDrafts.find(l => l.id === state.currentDraftId)
      const draftIndex = state.userDrafts.indexOf(draft)
      const unit = draft.units.find(u => u.id === action.id)
      const unitIndex = draft.units.indexOf(unit)
      draft.units = removeItem(draft.units, unitIndex)
      return { ...state, userDrafts: replaceItem(state.userDrafts, draftIndex, draft) }
    }
    default: {
      throw new Error('Invalid Builder action: ' + action.type)
    }
  }
}

const Builder = () => {
  const initialState = {
    currentDraftId: null,
    userDrafts: []
  }

  const [state, dispatch] = useReducer(builderReducer, initialState)

  const newDraft = () => {
    console.log('new list')
    dispatch({ type: 'NEW_DRAFT' })
  }

  const removeDraft = (draftId: string) => {
    console.log('remove list: ' + draftId)
    dispatch({ type: 'REMOVE_DRAFT', id: draftId })
  }

  const selectDraft = (draftId: string) => {
    console.log('select list: ' + draftId)
    dispatch({ type: 'SELECT_DRAFT', id: draftId })
  }

  const addUnit = (unitKey: string) => {
    console.log('add unit: ' + unitKey)
    dispatch({ type: 'ADD_UNIT', unitKey: unitKey })
  }

  const removeUnit = (id: string) => {
    console.log('remove unit: ' + id)
    dispatch({ type: 'REMOVE_UNIT', id: id })
  }

  return (
    <div className="builder">
      <UserDrafts
        userDrafts={state.userDrafts}
        currentDraftId={state.currentDraftId}
        selectDraft={selectDraft}
        newDraft={newDraft}
        removeDraft={removeDraft}
      />
      <Browser addUnit={addUnit} />
      <CurrentDraft
        draft={state.userDrafts.find(l => l.id === state.currentDraftId)}
        removeUnit={removeUnit}
      />
    </div>
  )
}

export default Builder

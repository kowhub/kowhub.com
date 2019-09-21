import { Draft } from '../../source_data/Draft'

import {
  ADD_DRAFT,
  REMOVE_DRAFT,
  SELECT_DRAFT,
  ADD_UNIT,
  REMOVE_UNIT
} from '../actionTypes'

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

const initialState = {
  currentDraftId: null,
  userDrafts: []
}

const builderReducer = (state = initialState, action) => {
  console.log('REDUX: ' + action.type)
  switch (action.type) {
    case ADD_DRAFT: {
      const nextId = newRandomId()
      const meta = { name: 'my list [' + nextId + ']', army: 'dw', points_limit: 2000, version: '201910' }
      const now = '20190920'
      const newUserDraft: Draft = { id: nextId, created_at: now, updated_at: now, meta: meta, units: [] }
      return { ...state, userDrafts: [...state.userDrafts, newUserDraft], currentDraftId: nextId }
    }
    case REMOVE_DRAFT: {
      const { id } = action.payload
      const newDrafts = state.userDrafts.filter(l => l.id !== id)
      let newId
      if (newDrafts.length < 1) {
        newId = null
      } else if (id === state.currentDraftId) {
        newId = newDrafts[0].id
      } else {
        newId = state.currentDraftId
      }
      return { ...state, currentDraftId: newId, userDrafts: newDrafts }
    }
    case SELECT_DRAFT: {
      const { id } = action.payload
      return { ...state, currentDraftId: id }
    }
    case ADD_UNIT: {
      if (!state.currentDraftId) {
        return state
      }
      const { unitKeyForm } = action.payload
      const draft = state.userDrafts.find(l => l.id === state.currentDraftId)
      const draftIndex = state.userDrafts.indexOf(draft)
      const newUnit = { id: newRandomId(), dna: unitKeyForm }
      const newDraft = { ...draft, units: [...draft.units, newUnit] }
      return { ...state, userDrafts: replaceItem(state.userDrafts, draftIndex, newDraft) }
    }
    case REMOVE_UNIT: {
      const { id } = action.payload
      const draft = state.userDrafts.find(l => l.id === state.currentDraftId)
      const draftIndex = state.userDrafts.indexOf(draft)
      const unit = draft.units.find(u => u.id === id)
      const unitIndex = draft.units.indexOf(unit)
      const newDraft = { ...draft, units: removeItem(draft.units, unitIndex) }
      return { ...state, userDrafts: replaceItem(state.userDrafts, draftIndex, newDraft) }
    }
    default: {
      return state
    }
  }
}

export default builderReducer

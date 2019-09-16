import {
  ADD_DRAFT,
  REMOVE_DRAFT,
  SELECT_DRAFT,
  ADD_UNIT,
  REMOVE_UNIT
} from './actionTypes'

export const addDraft = () => ({
  type: ADD_DRAFT
})

export const removeDraft = (draftId: string) => ({
  type: REMOVE_DRAFT,
  payload: {
    id: draftId
  }
})

export const selectDraft = (draftId: string) => ({
  type: SELECT_DRAFT,
  payload: {
    id: draftId
  }
})

export const addUnit = (unitKey: string) => ({
  type: ADD_UNIT,
  payload: {
    unitKey: unitKey
  }
})

export const removeUnit = (id: string) => ({
  type: REMOVE_UNIT,
  payload: {
    id: id
  }
})

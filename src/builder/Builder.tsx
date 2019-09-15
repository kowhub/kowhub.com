import React, { useReducer } from 'react'
import Browser from './Browser'
import UserLists from './UserLists'
import CurrentList from './CurrentList'
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
    case 'NEW_LIST':
      const nextId = newRandomId()
      const newUserList = { id: nextId, name: 'my list [' + nextId + ']', units: [] }
      return { ...state, userLists: [...state.userLists, newUserList], currentListId: nextId }
    case 'REMOVE_LIST':
      const newLists = state.userLists.filter(l => l.id !== action.id)
      let newId
      if (newLists.length < 1) {
        newId = null
      } else if (action.id === state.currentListId) {
        newId = newLists[0].id
      } else {
        newId = state.currentListId
      }
      return { ...state, currentListId: newId, userLists: newLists }
    case 'SELECT_LIST':
      return { ...state, currentListId: action.id }
    case 'ADD_UNIT':
      const addUnitList = state.userLists.find(l => l.id === state.currentListId)
      const addUnitListIndex = state.userLists.indexOf(addUnitList)
      addUnitList.units = [...addUnitList.units, { id: newRandomId(), unitKey: action.unitKey }]
      return { ...state, userLists: replaceItem(state.userLists, addUnitListIndex, addUnitList) }
    case 'REMOVE_UNIT':
      const removeUnitList = state.userLists.find(l => l.id === state.currentListId)
      const removeUnitListIndex = state.userLists.indexOf(removeUnitList)
      const unit = removeUnitList.units.find(u => u.id === action.id)
      const unitIndex = removeUnitList.units.indexOf(unit)
      removeUnitList.units = removeItem(removeUnitList.units, unitIndex)
      return { ...state, userLists: replaceItem(state.userLists, removeUnitListIndex, removeUnitList) }
    default:
      throw new Error('Invalid Builder action: ' + action.type)
  }
}

const Builder = () => {
  const initialState = {
    currentListId: null,
    userLists: []
  }

  const [state, dispatch] = useReducer(builderReducer, initialState)

  const newList = () => {
    console.log('new list')
    dispatch({ type: 'NEW_LIST' })
  }

  const removeList = (listId: string) => {
    console.log('remove list: ' + listId)
    dispatch({ type: 'REMOVE_LIST', id: listId })
  }

  const selectList = (listId: string) => {
    console.log('select list: ' + listId)
    dispatch({ type: 'SELECT_LIST', id: listId })
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
      <UserLists
        userLists={state.userLists}
        currentListId={state.currentListId}
        selectList={selectList}
        newList={newList}
        removeList={removeList}
      />
      <Browser addUnit={addUnit} />
      <CurrentList
        currentList={state.userLists.find(l => l.id === state.currentListId)}
        removeUnit={removeUnit}
      />
    </div>
  )
}

export default Builder

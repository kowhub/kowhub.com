import React, { useReducer } from 'react'
import BrowserArmyPanel from './BrowserArmyPanel'
import BrowserUnitPanel from './BrowserUnitPanel'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARMY_VIEW': {
      return { ...state, isArmyView: true }
    }
    case 'SET_UNIT_VIEW': {
      return { ...state, isArmyView: false, armyKey: action.key }
    }
    default: {
      return state
    }
  }
}

const Browser = ({ dataRepo }) => {
  const initialState = {
    isArmyView: true,
    armyKey: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const setArmyView = () => {
    dispatch({ type: 'SET_ARMY_VIEW' })
  }

  const setUnitView = (armyKey: string) => {
    dispatch({ type: 'SET_UNIT_VIEW', key: armyKey })
  }

  if (state.isArmyView) {
    const armies = dataRepo.getArmiesList()
    return (
      <BrowserArmyPanel
        armies={armies}
        setUnitView={setUnitView}
      />
    )
  } else {
    const units = dataRepo.getUnitsList(state.armyKey)
    return (
      <BrowserUnitPanel
        armyName={dataRepo.names.find(state.armyKey).name}
        units={units}
        setArmyView={setArmyView}
      />
    )
  }
}

export default Browser

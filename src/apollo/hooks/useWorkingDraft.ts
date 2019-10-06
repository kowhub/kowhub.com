import { useReducer, useEffect } from 'react'
import { WorkingDraft, Unit } from '../../types/Draft'
import { DataRepository } from '../../source_data/DataRepository'
import useCurrentDraft from './useCurrentDraft'
import useUpdateDraftDna from './useUpdateDraftDna'

// Move to some helper file?
const getAggregateDna = (units: Unit[]): string => {
  return units.map(u => u.dna).join(';')
}
const getAggregatePoints = (units: Unit[]): number => {
  return units.reduce((sum, unit) => sum + unit.pts, 0)
}

const reducer = (dataRepo: DataRepository) => {
  return (state, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'REFRESH': {
        const { units } = action.payload
        return { units }
      }
      case 'ADD_UNIT': {
        const { unit } = action.payload
        const units = [ ...state.units, unit ]
        return { units }
      }
      case 'UPDATE_UNIT': {
        const { unit } = action.payload
        const index = state.units.findIndex(u => u.id === unit.id)
        if (index < 0) {
          return state
        }
        const units = [ ...state.units.slice(0,index), unit, ...state.units.slice(index + 1) ]
        return { units }
      }
      case 'REMOVE_UNIT': {
        const { id } = action.payload
        const units = state.units.filter(unit => unit.id !== id)
        return { units }
      }
      default: {
        return state
      }
    }
  }
}

const useWorkingDraft = (dataRepo: DataRepository) => {
  const initialState = {
    units: [],
  }
  const [state, dispatch] = useReducer(reducer(dataRepo), initialState)

  const { currentDraft } = useCurrentDraft()
  const { updateDraftDna } = useUpdateDraftDna()

  const triggerUpdateDraft = (dna: string) => {
    if (!currentDraft) return
    console.log('TRIGGERING UPDATE DRAFT DNA: ' + aggregateDna)
    updateDraftDna({ id: currentDraft.id, dna })
  }

  // `draftDna` is the value of the dna field on our draft object
  const draftDna = currentDraft ? currentDraft.dna || '' : null
  // `aggregateDna` is the combined encoded dna of our unpacked units
  const aggregateDna = getAggregateDna(state.units)

  /*
   * When the currently selected draft changes its DNA in the store
   * (or the currently selected draft ID changes), first check if the
   * new draft DNA is different from what is already in our state.
   * If the DNAs do not match, recalculate state based on new DNA.
   */
  useEffect(() => {
    console.log('useEffect on draftDna change')
    //if (!draftDna) return
    if (draftDna !== null && draftDna !== aggregateDna) {
      const units = dataRepo.unpackDraft(draftDna)
      dispatch({ type: 'REFRESH', payload: { units } })
    } else {
      dispatch({ type: 'NO_CHANGES' })
    }
  }, [draftDna])

  /*
   * When the aggregateDna of our units changes,
   * trigger Apollo mutation
   */
  useEffect(() => {
    triggerUpdateDraft(aggregateDna)
  }, [aggregateDna])

  const addUnit = (unitFormKey: string) => {
    const tmpName = currentDraft ? currentDraft.name : '<null>'
    console.log('addUnit: ' + unitFormKey + ' (currentDraft.name='+tmpName+')')
    if (!currentDraft) return
    const unit = dataRepo.unpackUnit(unitFormKey)
    dispatch({ type: 'ADD_UNIT', payload: { unit } })
  }

  const updateUnit = (unitId: string, unitDna: string) => {
    const tmpName = currentDraft ? currentDraft.name : '<null>'
    console.log('updateUnit: ' + unitId + ' (currentDraft.name='+tmpName+')')
    if (!currentDraft) return
    const unit = dataRepo.unpackUnit(unitDna, unitId)
    dispatch({ type: 'UPDATE_UNIT', payload: { unit } })
  }

  const removeUnit = (unitId: string) => {
    const tmpName = currentDraft ? currentDraft.name : '<null>'
    console.log('removeUnit: ' + unitId + ' (currentDraft.name='+tmpName+')')
    if (!currentDraft) return
    dispatch({ type: 'REMOVE_UNIT', payload: { id: unitId } })
  }

  const workingDraft = currentDraft ? {
    ...currentDraft,
    units: state.units,
    pointsTotal: getAggregatePoints(state.units)
  } : null

  return {
    workingDraft,
    removeUnit,
    addUnit,
    updateUnit,
  }
}

export default useWorkingDraft

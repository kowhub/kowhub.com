import { DataRepository } from './DataRepository'
import { NameRepository } from '../source_data/NameRepository'

import { KowNames } from '../source_data/KowNameTypes'
import { KowData } from '../source_data/KowDataTypes'

import tempData from '../source_data/temp_data.json'
import tempNames from '../source_data/temp_names.json'

export function createDataRepositoryForVersion(): DataRepository {
  const names: KowNames = tempNames
  const data: KowData = tempData

  const nameRepo = new NameRepository(tempNames)
  const dataRepo = new DataRepository(tempData, nameRepo)

  return dataRepo
}

import { DataRepository } from './DataRepository'
import { NameRepository } from '../source_data/NameRepository'

import { RawNames } from '../source_data/RawNameTypes'
import { RawData } from '../source_data/RawDataTypes'

import tempData from '../source_data/temp_data.json'
import tempNames from '../source_data/temp_names.json'

export function createDataRepositoryForVersion(): DataRepository {
  const names: RawNames = tempNames
  const data: RawData = tempData

  const nameRepo = new NameRepository(tempNames)
  const dataRepo = new DataRepository(tempData, nameRepo)

  return dataRepo
}

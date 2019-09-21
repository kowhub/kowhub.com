import React from 'react'
import BuilderApp from './BuilderApp'

import { createDataRepositoryForVersion } from '../source_data/DataRepositoryFactory'

const BuilderAppWrapper = () => {
  const dataRepo = createDataRepositoryForVersion()

  return (
    <BuilderApp
      dataRepo={dataRepo}
    />
  )
}

export default BuilderAppWrapper

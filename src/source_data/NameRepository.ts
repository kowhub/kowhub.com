import { RawNames } from './RawNameTypes'

type NameStruct = {
  name: string,
  sname: string
}

export class NameRepository {
  constructor(private readonly names: RawNames) {}

  public find(key: string): NameStruct {
    const entry = this.names[key]
    if (!entry) return { name: '(unknown)', sname: '(unknown)' }

    return {
      name: entry[0],
      sname: entry[1] || entry[0]
    }
  }
}

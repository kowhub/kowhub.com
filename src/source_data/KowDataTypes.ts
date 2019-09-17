export type KowData = {
  version: string,
  armyKeyList: string[],
  itemKeyList: string[],
  armies: {
    [armyKey: string]: KowArmy
  },
  units: {
    [unitKey: string]: KowUnit
  },
  items: {
    [itemKey: string]: KowItem
  }
}

export type KowArmy = {
  sup: string,
  alignment: string,
  unitKeyList: string[]
}

export type KowUnit = {
  sup: string,
  army: string,
  unittype: string
}

export type KowItem = {
  sup: string
}

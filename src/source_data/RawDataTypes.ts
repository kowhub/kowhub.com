export type RawData = {
  version: string,
  armyKeyList: string[],
  itemKeyList: string[],
  armies: {
    [armyKey: string]: RawArmy
  },
  units: {
    [unitKey: string]: RawUnit
  },
  items: {
    [itemKey: string]: RawItem
  }
}

export type RawArmy = {
  sup: string,
  alignment: string,
  unitKeyList: string[]
}

export type RawUnit = {
  sup: string,
  army: string,
  unittype: string,
  forms: {
    [formkey: string]: RawUnitForm
  }
}

export type RawUnitForm = {
  pts: number,
  upgrades: RawUnitUpgrade[]
}

export type RawUnitUpgrade = {
  key: string,
  pts: number
}

export type RawItem = {
  sup: string,
  pts: number
}

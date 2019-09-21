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

type RawArmy = {
  sup: string,
  alignment: string,
  unitKeyList: string[]
}

type RawUnit = {
  sup: string,
  army: string,
  unittype: string,
  forms: {
    [formkey: string]: RawUnitForm
  }
}

type RawUnitForm = {
  pts: number,
  upgrades: RawUnitUpgrade[]
}

type RawUnitUpgrade = {
  key: string,
  pts: number
}

type RawItem = {
  sup: string,
  pts: number
}

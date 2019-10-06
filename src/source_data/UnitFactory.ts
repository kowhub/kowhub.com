import { NameRepository } from './NameRepository'
import { readDna } from './DnaReader'
import { Unit } from '../types/Draft'
import { createUnitId } from '../utils/RandomId'
import {
  RawData,
  RawUnitForm,
  RawUnitUpgrade,
  RawItem
} from './RawDataTypes'

export class UnitFactory {
  constructor(private readonly data: RawData, public readonly names: NameRepository) {}

  public readPoints(dna: string): number {
    return 0
      /*
    const [unitKey, formKey, itemKey, upgradeKeys] = readDna(dna)
    const form = 'r'//this.data.units[unitKey].forms[formKey]
    const item = this.data.items[itemKey]
    return this.calculatePoints(form, item, upgradeKeys)
       */
  }

  public create(dna: string, id: string | undefined): Unit {
    const [unitKey, formKey, itemKey, upgradeKeys] = readDna(dna)
    return {
      id: id || createUnitId(),
      dna,
      //name: dna,
      name: this.names.find(unitKey).name,
      form: this.names.find(formKey).name,
      pts: 0,
    }
      /*
    const unit = this.data.units[unitKey]
    const form = unit.forms[formKey]
    const item = this.data.items[itemKey]
    return {
      dna: dna,
      pts: this.calculatePoints(form, item, upgradeKeys)
    }
       */
  }

  private calculatePoints(form: RawUnitForm, item: RawItem, upgradeKeys: string[]): number {
    return 0
      /*
    if (!this.isValidUpgrades(upgradeKeys, form.upgrades)) {
      return -1
    }
    return form.pts
      + (item ? item.pts : 0)
      + upgradeKeys.reduce((sum, key) => form.upgrades[key].pts, 0)
       */
  }

  private isValidUpgrades(upgradeKeys: string[], availableUpgrades: RawUnitUpgrade[]): boolean {
    const availableKeys = availableUpgrades.map(u => u.key)
    return !upgradeKeys.some(k => !availableKeys.includes(k))
  }
}

import { NameRepository } from './NameRepository'
import { RawData } from './RawDataTypes'
import { readDna } from './DnaReader'
import { Unit } from './Unit'

export class UnitFactory {
  constructor(private readonly data: RawData, public readonly names: NameRepository) {}

  public readPoints(dna: string): number {
    const [unitKey, formKey, itemKey, upgrades] = readDna(dna)
    const item = this.data.items[itemKey]
    const formData = this.data.units[unitKey].forms[formKey]
    return formData.pts
      + (item ? item.pts : 0)
      + formData.upgrades.reduce((sum, upgrade) => upgrade.pts, 0)
  }

  public create(dna: string): Unit {
    const [unitKey, formKey, itemKey, upgrades] = readDna(dna)
    const item = this.data.items[itemKey]
    const unit = this.data.units[unitKey]
    return {
      dna: dna,
      name: this.names.find(unitKey).name,
      form: this.names.find(formKey).name,
      pts: unit.forms[formKey].pts
    }
  }
}

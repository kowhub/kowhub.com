import { RawData } from './RawDataTypes'
import { NameRepository } from './NameRepository'
import { readDna } from './DnaReader'
import { UnitFactory } from './UnitFactory'
import { Draft } from './Draft'
import { Unit } from './Unit'

export class DataRepository {
  private unitFactory: UnitFactory

  constructor(private readonly data: RawData, public readonly names: NameRepository) {
    this.unitFactory = new UnitFactory(data, names)
  }

  get version(): string {
    return this.data.version
  }

  public getArmiesList() {
    return this.data.armyKeyList.map(armyKey => {
      return {
        ...this.data.armies[armyKey],
        ...this.names.find(armyKey),
        key: armyKey,
      }
    })
  }

  public getUnitsList(armyKey: string) {
    const army = this.data.armies[armyKey]
    if (!army) return []

    return army.unitKeyList.map(unitKey => {
      return {
        ...this.data.units[unitKey],
        ...this.names.find(unitKey),
        key: unitKey,
      }
    })
  }

  public getDraftPoints(draft: Draft): number {
    if (draft.meta.kowVersion !== this.version) return -1

    return draft.units.reduce((sum, unit) => sum + this.getUnitPoints(unit.dna), 0)
  }

  public getUnitPoints(dna: string): number {
    return this.unitFactory.readPoints(dna)
  }

  public unpackUnit(dna: string): Unit {
    return this.unitFactory.create(dna)
  }
}

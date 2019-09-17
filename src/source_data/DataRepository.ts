import { KowData } from './KowDataTypes'
import { NameRepository } from './NameRepository'

export class DataRepository {
  constructor(private readonly data: KowData, public readonly names: NameRepository) {}

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
}

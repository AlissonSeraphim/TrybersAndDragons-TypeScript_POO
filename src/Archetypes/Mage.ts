import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdInstances = 0;
  private _damage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.incrementCreatedInstances();
  }

  private static incrementCreatedInstances(): void {
    Mage._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}
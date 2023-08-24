import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdInstances = 0;
  private _damage: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.incrementCreatedInstances();
  }

  private static incrementCreatedInstances(): void {
    Warrior._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}
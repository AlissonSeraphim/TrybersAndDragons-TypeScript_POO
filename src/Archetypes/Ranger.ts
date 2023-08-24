import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdInstances = 0;
  private _damage: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.incrementCreatedInstances();
  }

  private static incrementCreatedInstances(): void {
    Ranger._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}
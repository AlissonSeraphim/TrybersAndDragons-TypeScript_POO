import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private _damage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.incrementCreatedInstances();
  }

  private static incrementCreatedInstances(): void {
    Necromancer._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType {
    return this._damage;
  }
}
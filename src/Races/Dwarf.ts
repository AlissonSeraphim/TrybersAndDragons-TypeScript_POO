import Race from './Race';

class Dwarf extends Race {
  private _lifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf.incrementCreatedInstances();  
  }

  private static incrementCreatedInstances(): void {
    Dwarf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Dwarf;
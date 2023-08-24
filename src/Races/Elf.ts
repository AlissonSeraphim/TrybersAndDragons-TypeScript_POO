import Race from './Race';

class Elf extends Race {
  private _lifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 99;
    Elf.incrementCreatedInstances();  
  }

  private static incrementCreatedInstances(): void {
    Elf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Elf;
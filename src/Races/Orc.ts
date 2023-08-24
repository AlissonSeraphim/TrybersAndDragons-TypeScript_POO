import Race from './Race';

class Orc extends Race {
  private _lifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
    Orc.incrementCreatedInstances();  
  }

  private static incrementCreatedInstances(): void {
    Orc._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Orc;
import Race from './Race';

class Halfling extends Race {
  private _lifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 60;
    Halfling.incrementCreatedInstances();  
  }

  private static incrementCreatedInstances(): void {
    Halfling._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Halfling;
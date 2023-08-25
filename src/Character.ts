import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    // name: string, 
    // dexterity: number, 
    race: Elf,
    // archetype: Mage,
    // maxLifePoints: number,
    lifePoints: number,
    strength: number,
    // defense: number, 
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = (lifePoints / 2);
    this._lifePoints = lifePoints;
    this._strength = strength;
    this._energy = this.energy;
  }

  receiveDamage(attackPoints: number): number {
    return (this.defense - attackPoints);
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return this._energy;
  }
}
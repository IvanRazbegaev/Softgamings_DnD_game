export interface IRace {
  name: string,
  subRace: {name: string, speed: number, bonusStats:IMainCharacteristics}[]
}
export interface IMainCharacteristics {
  strength: number,
  dexterity: number,
  constitution: number,
  intellect: number,
  wisdom: number,
  charisma: number
}

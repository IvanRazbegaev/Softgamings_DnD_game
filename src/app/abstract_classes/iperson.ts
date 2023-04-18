export interface IPerson {
  name: string,
  race: any,

  maxHp: number,
  currentHp: number,

  proficiencyBonus: string,

  armorClass: number,
  speed: number,

  darkvision: number

  mainCharacteristics: {
    strength: number,
    dexterity: number,
    constitution: number,
    intellect: number,
    wisdom: number,
    charisma: number
  },

  skills: {
    acrobatics: number,
    animalHandling: number,
    arcana: number,
    athletics: number,
    history: number,
    insight: number,
    intimidation: number,
    investigation: number,
    medicine: number,
    nature: number,
    perception: number,
    performance: number,
    persuasion: number,
    religion: number,
    sleightOfHand: number,
    stealth: number,
    survival: number,
  }

}

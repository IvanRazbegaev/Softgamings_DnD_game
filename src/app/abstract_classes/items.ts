export interface IItems {
  AvailableForClass:string,
  cost: number,
  description: string,
  id: number,
  name: string,
  type: string
}

export interface IEquipment {
  name: string,
  description: IWeapons | undefined,
  value: number
}

export interface IWeapons {
  id: number,
  name?: string,
  rarity: string,
  damage: string | {dice: string, amount: number},
  damage_type: string,
  type: string,
  subtype: string,
  slots: number,
  description: string,
  cost: number
}

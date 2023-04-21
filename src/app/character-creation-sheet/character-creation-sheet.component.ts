import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {IClasses} from "../abstract_classes/iclasses";

@Component({
  selector: 'app-character-creation-sheet',
  templateUrl: './character-creation-sheet.component.html',
  styleUrls: ['./character-creation-sheet.component.css']
})
export class CharacterCreationSheetComponent implements OnInit {

  generalInformation: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required]),
    level: new UntypedFormControl({value: null}),
    maxHp: new UntypedFormControl({value: null}),
    race: new UntypedFormControl(null, [Validators.required]),
    characterClass: new UntypedFormControl(null, [Validators.required]),
    proficiencyBonus: new UntypedFormControl({value: null}),
    armorClass: new UntypedFormControl({value: null})
  })

  form: UntypedFormGroup = new UntypedFormGroup({

    strength: new UntypedFormControl({value: null}),
    dexterity: new UntypedFormControl({value: null}),
    constitution: new UntypedFormControl({value: null}),
    intellect: new UntypedFormControl({value: null}),
    wisdom: new UntypedFormControl({value: null}),
    charisma: new UntypedFormControl({value: null}),

    strengthModificator: new UntypedFormControl({value: null}),
    dexterityModificator: new UntypedFormControl({value: null}),
    constitutionModificator: new UntypedFormControl({value: null}),
    intellectModificator: new UntypedFormControl({value: null}),
    wisdomModificator: new UntypedFormControl({value: null}),
    charismaModificator: new UntypedFormControl({value: null}),

    strengthPointsSpendTotal: new UntypedFormControl({value: null}),
    dexterityPointsSpendTotal: new UntypedFormControl({value: null}),
    constitutionPointsSpendTotal: new UntypedFormControl({value: null}),
    intellectPointsSpendTotal: new UntypedFormControl({value: null}),
    wisdomPointsSpendTotal: new UntypedFormControl({value: null}),
    charismaPointsSpendTotal: new UntypedFormControl({value: null}),

    pointsBuy: new UntypedFormControl({value: null}),

    athletics: new UntypedFormControl({value: null}),
    sleightOfHand: new UntypedFormControl({value: null}),
    stealth: new UntypedFormControl({value: null}),
    arcana: new UntypedFormControl({value: null}),
    history: new UntypedFormControl({value: null}),
    investigation: new UntypedFormControl({value: null}),
    nature: new UntypedFormControl({value: null}),
    religion: new UntypedFormControl({value: null}),
    animalHandling: new UntypedFormControl({value: null}),
    insight: new UntypedFormControl({value: null}),
    medicine: new UntypedFormControl({value: null}),
    perception: new UntypedFormControl({value: null}),
    survival: new UntypedFormControl({value: null}),
    deception: new UntypedFormControl({value: null}),
    intimidation: new UntypedFormControl({value: null}),
    performance: new UntypedFormControl({value: null}),
    persuasion: new UntypedFormControl({value: null}),
    acrobatics: new UntypedFormControl({value: null}),


  });
  readonly minCharacteristicValue: number = 8;
  readonly maxCharacteristicValue: number = 15;

  readonly maxPointsBuyValue: number = 27
  currentPointsBuyValue: number = 0

  characterLevel: number = 1;
  classes: IClasses[] = [
    {name: 'Barbarian', hitDie: 'd12', initialHp: 12},
    {name: 'Bard', hitDie: 'd8', initialHp: 8},
    {name: 'Cleric', hitDie: 'd8', initialHp: 8},
    {name: 'Druid', hitDie: 'd8', initialHp: 8},
    {name: 'Fighter', hitDie: 'd10', initialHp: 10},
    {name: 'Monk', hitDie: 'd8', initialHp: 8},
    {name: 'Paladin', hitDie: 'd10', initialHp: 10},
    {name: 'Ranger', hitDie: 'd10', initialHp: 10},
    {name: 'Rogue', hitDie: 'd8', initialHp: 8},
    {name: 'Sorcerer', hitDie: 'd6', initialHp: 10},
    {name: 'Warlock', hitDie: 'd8', initialHp: 8},
    {name: 'Wizard', hitDie: 'd6', initialHp: 10},
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.form.get('strength')?.setValue(this.minCharacteristicValue)
    this.form.get('dexterity')?.setValue(this.minCharacteristicValue)
    this.form.get('constitution')?.setValue(this.minCharacteristicValue)
    this.form.get('intellect')?.setValue(this.minCharacteristicValue)
    this.form.get('wisdom')?.setValue(this.minCharacteristicValue)
    this.form.get('charisma')?.setValue(this.minCharacteristicValue)

    this.form.get('strengthModificator')?.setValue(this.calculateModificator('strength'))
    this.form.get('dexterityModificator')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('constitutionModificator')?.setValue(this.calculateModificator('constitution'))
    this.form.get('intellectModificator')?.setValue(this.calculateModificator('intellect'))
    this.form.get('wisdomModificator')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('charismaModificator')?.setValue(this.calculateModificator('charisma'))

    this.form.get('strengthPointsSpendTotal')?.setValue(0)
    this.form.get('dexterityPointsSpendTotal')?.setValue(0)
    this.form.get('constitutionPointsSpendTotal')?.setValue(0)
    this.form.get('intellectPointsSpendTotal')?.setValue(0)
    this.form.get('wisdomPointsSpendTotal')?.setValue(0)
    this.form.get('charismaPointsSpendTotal')?.setValue(0)

    this.currentPointsBuyValue = this.maxPointsBuyValue
    this.form.get('pointsBuy')?.setValue(this.currentPointsBuyValue)

    this.form.get('athletics')?.setValue(this.calculateModificator('strength'))
    this.form.get('acrobatics')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('sleightOfHand')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('stealth')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('arcana')?.setValue(this.calculateModificator('intellect'))
    this.form.get('history')?.setValue(this.calculateModificator('intellect'))
    this.form.get('investigation')?.setValue(this.calculateModificator('intellect'))
    this.form.get('nature')?.setValue(this.calculateModificator('intellect'))
    this.form.get('religion')?.setValue(this.calculateModificator('intellect'))
    this.form.get('animalHandling')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('insight')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('medicine')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('perception')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('survival')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('deception')?.setValue(this.calculateModificator('charisma'))
    this.form.get('intimidation')?.setValue(this.calculateModificator('charisma'))
    this.form.get('performance')?.setValue(this.calculateModificator('charisma'))
    this.form.get('persuasion')?.setValue(this.calculateModificator('charisma'))

    this.generalInformation.get('level')?.setValue(this.characterLevel)
    this.generalInformation.get('name')?.setValue('')
    this.generalInformation.get('race')?.setValue('')
    this.generalInformation.get('maxHp')?.setValue(this.characterHpHandler())
    this.generalInformation.get('proficiencyBonus')?.setValue(this.getProficiencyBonusValue())
    this.generalInformation.get('armorClass')?.setValue(this.getArmorClassValue())

  }

  addPoint(characteristic: string) {
    const characteristicControl = this.form.get(characteristic)!

    if (characteristicControl.value + 1 > this.maxCharacteristicValue) {
      characteristicControl.setValue(this.maxCharacteristicValue)
    } else {
      const pointBuyCost = this.calculateCurrentPointBuyCost(characteristicControl.value + 1)
      if (pointBuyCost <= this.form.get('pointsBuy')?.value) {
        characteristicControl.setValue(characteristicControl.value + 1)
        this.calculatePointsLeft(pointBuyCost, 'subtract')
      }
    }
  }

  subtractPoint(characteristic: string) {
    const characteristicControl = this.form.get(characteristic)!

    if (characteristicControl.value - 1 < this.minCharacteristicValue) {
      characteristicControl.setValue(this.minCharacteristicValue)
    } else {
      const pointBuyCost = this.calculateCurrentPointBuyCost(characteristicControl.value)
      this.calculatePointsLeft(pointBuyCost, 'add')
      characteristicControl.setValue(characteristicControl.value - 1)
    }
  }

  calculateModificator(characteristic: string): number {
    const currentModificatorValue = this.form.get(characteristic)!.value
    return Math.floor((currentModificatorValue - 10) / 2)
  }

  calculateCurrentPointBuyCost(currentCharacteristicValue: number): number {
    let currentPointBuyCost: number;
    switch (true) {
      case currentCharacteristicValue === 14 || currentCharacteristicValue === 15:
        currentPointBuyCost = 2
        break
      default:
        currentPointBuyCost = 1
        break
    }
    return currentPointBuyCost
  }

  calculatePointsLeft(pointBuyCost: number, operation: string) {
    let pointsLeft: number = 0;
    if (operation === 'add') {
      pointsLeft = this.form.get('pointsBuy')?.value + pointBuyCost
    } else if (operation === 'subtract') {
      pointsLeft = this.form.get('pointsBuy')?.value - pointBuyCost
    }
    this.form.get('pointsBuy')?.setValue(pointsLeft)
  }

  calculatePointsSpend(characteristicName: string): number {
    let pointsSpent: number;
    const currentCharacteristicValue = this.form.get(characteristicName)?.value || 0
    switch (true) {
      case currentCharacteristicValue === 9:
        pointsSpent = 1
        break
      case currentCharacteristicValue === 10:
        pointsSpent = 2
        break
      case currentCharacteristicValue === 11:
        pointsSpent = 3
        break
      case currentCharacteristicValue === 12:
        pointsSpent = 4
        break
      case currentCharacteristicValue === 13:
        pointsSpent = 5
        break
      case currentCharacteristicValue === 14:
        pointsSpent = 7
        break
      case currentCharacteristicValue === 15:
        pointsSpent = 9
        break
      default:
        pointsSpent = 0
        break
    }
    return pointsSpent
  }

  addButtonHandler(characteristicName: string): boolean {
    const characteristicValue = this.form.get(characteristicName)?.value
    const pointBuyCost = this.calculateCurrentPointBuyCost(characteristicValue)

    if ((this.form.get('pointsBuy')?.value - pointBuyCost) < 0) {
      return true
    }

    return characteristicValue + 1 > this.maxCharacteristicValue
  }

  subtractButtonHandler(characteristicName: string): boolean {
    const characteristicValue = this.form.get(characteristicName)?.value

    return characteristicValue - 1 < this.minCharacteristicValue
  }

  characterHpHandler(): number{
    const characterClass: IClasses = this.generalInformation.get('characterClass')?.value
    const constitutionModifier = this.calculateModificator('constitution')
    if(characterClass){
      return characterClass.initialHp + constitutionModifier
    } else return 0
  }

  getProficiencyBonusValue(): number {
    const characterLevel = this.generalInformation.get('level')?.value
    let proficiencyBonusValue: number = 0
    switch (true){
      case characterLevel === 1 || characterLevel === 2 || characterLevel === 3 || characterLevel === 4:
        proficiencyBonusValue = 2;
        break
      case characterLevel === 5 || characterLevel === 6 || characterLevel === 7 || characterLevel === 8:
        proficiencyBonusValue = 3;
        break
      case characterLevel === 9 || characterLevel === 10 || characterLevel === 11 || characterLevel === 12:
        proficiencyBonusValue = 4;
        break
      case characterLevel === 13 || characterLevel === 14 || characterLevel === 15 || characterLevel === 16:
        proficiencyBonusValue = 5;
        break
      case characterLevel === 17 || characterLevel === 18 || characterLevel === 19 || characterLevel === 20:
        proficiencyBonusValue = 6;
        break
    }
    return proficiencyBonusValue;
  }

  getArmorClassValue(): number {
    const dexModifier = this.calculateModificator('dexterity')
    return 10 + dexModifier;
  }
}

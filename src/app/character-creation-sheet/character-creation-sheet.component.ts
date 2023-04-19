import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-character-creation-sheet',
  templateUrl: './character-creation-sheet.component.html',
  styleUrls: ['./character-creation-sheet.component.css']
})
export class CharacterCreationSheetComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    strength: new UntypedFormControl({value: 10, disabled: true}),
    dexterity: new UntypedFormControl({value: 10, disabled: true}),
    constitution: new UntypedFormControl({value: 10, disabled: true}),
    intellect: new UntypedFormControl({value: 10, disabled: true}),
    wisdom: new UntypedFormControl({value: 10, disabled: true}),
    charisma: new UntypedFormControl({value: 10, disabled: true}),

    strengthModificator: new UntypedFormControl({value: null, disabled: true}),
    dexterityModificator: new UntypedFormControl({value: null, disabled: true}),
    constitutionModificator: new UntypedFormControl({value: null, disabled: true}),
    intellectModificator: new UntypedFormControl({value: null, disabled: true}),
    wisdomModificator: new UntypedFormControl({value: null, disabled: true}),
    charismaModificator: new UntypedFormControl({value: null, disabled: true}),

    pointsBuy: new UntypedFormControl({value: null, disabled: true}),
  });
  readonly minCharacteristicValue: number = 8;
  readonly maxCharacteristicValue: number = 20;

  readonly maxPointsBuyValue: number = 27
  currentPointsBuyValue: number = 0


  ngOnInit(): void {
    this.form.get('strengthModificator')?.setValue(this.calculateModificator('strength'))
    this.form.get('dexterityModificator')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('constitutionModificator')?.setValue(this.calculateModificator('constitution'))
    this.form.get('intellectModificator')?.setValue(this.calculateModificator('intellect'))
    this.form.get('wisdomModificator')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('charismaModificator')?.setValue(this.calculateModificator('charisma'))

    this.currentPointsBuyValue = this.maxPointsBuyValue
    this.form.get('pointsBuy')?.setValue(this.currentPointsBuyValue)
  }

  addPoint(characteristic: string) {
    const characteristicControl = this.form.get(characteristic)!

    if (characteristicControl.value + 1 >= this.maxCharacteristicValue) {
      characteristicControl.setValue(this.maxCharacteristicValue)
    } else {
      characteristicControl.setValue(characteristicControl.value + 1)
    }
  }

  subtractPoint(characteristic: string) {
    const characteristicControl = this.form.get(characteristic)!
    const bonusBuyCost = this.calculateCurrentPointBuyCost(characteristicControl.value)

    if (characteristicControl.value - 1 <= this.minCharacteristicValue) {
      characteristicControl.setValue(this.minCharacteristicValue)
    } else {
      characteristicControl.setValue(characteristicControl.value - 1)
    }
  }

  calculateModificator(characteristic: string): number {
    const currentModificatorValue = this.form.get(characteristic)!.value
    return Math.floor((currentModificatorValue - 10) / 2)
  }

  calculateCurrentPointBuyCost(currentCharacteristicValue: number): number {
    let currentPointBuyCost: number = 0;
    switch (true) {
      case currentCharacteristicValue === 8:
        currentPointBuyCost = 0
        break
      case currentCharacteristicValue === 9:
        currentPointBuyCost = 1
        break
      case currentCharacteristicValue === 10:
        currentPointBuyCost = 2
        break
      case currentCharacteristicValue === 11:
        currentPointBuyCost = 3
        break
      case currentCharacteristicValue === 12:
        currentPointBuyCost = 4
        break
      case currentCharacteristicValue === 13:
        currentPointBuyCost = 5
        break
      case currentCharacteristicValue === 14:
        currentPointBuyCost = 7
        break
      case currentCharacteristicValue === 15:
        currentPointBuyCost = 9
        break
    }
    return currentPointBuyCost
  }
}

import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-character-creation-sheet',
  templateUrl: './character-creation-sheet.component.html',
  styleUrls: ['./character-creation-sheet.component.css']
})
export class CharacterCreationSheetComponent implements OnInit{

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
  });
  readonly minCharacteristicValue: number = 8;
  readonly maxCharacteristicValue: number = 20;



  ngOnInit(): void {
    this.form.get('strengthModificator')?.setValue(this.calculateModificator('strength'))
    this.form.get('dexterityModificator')?.setValue(this.calculateModificator('dexterity'))
    this.form.get('constitutionModificator')?.setValue(this.calculateModificator('constitution'))
    this.form.get('intellectModificator')?.setValue(this.calculateModificator('intellect'))
    this.form.get('wisdomModificator')?.setValue(this.calculateModificator('wisdom'))
    this.form.get('charismaModificator')?.setValue(this.calculateModificator('charisma'))
  }

  addPoint(characteristic: string){
    const characteristicControl = this.form.get(characteristic)!
    if(characteristicControl.value + 1 >= this.maxCharacteristicValue){
      characteristicControl.setValue(this.maxCharacteristicValue)
    } else {
      characteristicControl.setValue(characteristicControl.value + 1)
    }
  }

  subtractPoint(characteristic: string){
    const characteristicControl = this.form.get(characteristic)!
    if(characteristicControl.value - 1 <= this.minCharacteristicValue){
      characteristicControl.setValue(this.minCharacteristicValue)
    } else {
      characteristicControl.setValue(characteristicControl.value - 1)
    }
  }

  calculateModificator(characteristic: string): number {
    const currentModificatorValue = this.form.get(characteristic)!.value
    return Math.floor((currentModificatorValue - 10)/2)
  }
}

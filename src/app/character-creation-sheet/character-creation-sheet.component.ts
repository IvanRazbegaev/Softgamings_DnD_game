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
  });
  minCharacteristicValue: number = 0;
  maxCharacteristicValue: number = 20;

  ngOnInit(): void {
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
}

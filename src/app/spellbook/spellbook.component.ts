import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CLASS_SPELLS, RACE_SPELLS} from "../spells";

@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.css']
})
export class SpellbookComponent implements OnInit{
  raceSpellsData: any;
  classSpellsData: any;
  displayedColumns: string[] = ['Selected', 'Name', 'Description', "Damage", "AoE", "Range", "Ingredients"];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.raceSpellsData = RACE_SPELLS.filter(value => value.raceName === this.data.race.name && value.draconicAncestry === this.data.draconicAncestry)
    console.log(this.data)
    this.classSpellsData = CLASS_SPELLS.filter(value => value.className === this.data.characterClass.name && value.level === this.data.level)
    console.log(this.data)
  }

}

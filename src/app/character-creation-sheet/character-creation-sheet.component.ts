import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {IClasses} from "../abstract_classes/iclasses";
import {IRace} from "../abstract_classes/irace";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SpellbookComponent} from "../spellbook/spellbook.component";

const SPELLBOOK_SVG = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#754C24;" d="M100.326,439.385c0-8.309,3.037-15.919,8.053-21.788c-11.368,0.762-20.392,10.23-20.392,21.788
\tv18.327c0,11.559,9.025,21.029,20.397,21.788c-5.017-5.869-8.058-13.478-8.058-21.788L100.326,439.385z"/>
<path style="fill:#C43333;" d="M170.65,491.885l9.939-10.041c1.101-1.112,2.601-1.737,4.166-1.737c1.565,0,3.064,0.626,4.166,1.737
\tl9.939,10.041V454.41h-28.209v37.475H170.65z"/>
<path style="fill:#FFAA2A;" d="M355.991,206.086c0.896,1.744,0.818,3.723-0.012,5.345l0.014,0.007l-29.034,56.582h97.052V149.504
\th-97.055L355.991,206.086z M380.904,186.261c0-10.735,8.734-19.469,19.47-19.469c10.734,0,19.466,8.734,19.466,19.469v45.004
\tc0,10.735-8.732,19.469-19.466,19.469c-10.735,0-19.47-8.733-19.47-19.469V186.261z"/>
<path style="fill:#754C24;" d="M132.164,11.722h-22.314c-12.055,0-21.862,9.808-21.862,21.863v380.337
\tc5.88-5.056,13.517-8.122,21.862-8.122h22.314C132.164,405.801,132.164,11.722,132.164,11.722z"/>
<path style="fill:#808080;" d="M394.511,43.705H173.387v330.114h221.123v-94.076h-73.568l-31.779,61.933
\tc-1.002,1.955-3.016,3.185-5.214,3.185c-2.198,0-4.212-1.23-5.214-3.185L211.907,211.44c-0.896-1.745-0.818-3.724,0.012-5.345
\tl-0.012-0.006L278.736,75.85c1.002-1.955,3.016-3.185,5.214-3.185c2.198,0,4.212,1.23,5.214,3.185l31.778,61.933h73.569V43.705z
\t M374.818,353.729c1.091-1.09,2.604-1.723,4.138-1.723c1.547,0,3.049,0.633,4.15,1.723c1.09,1.09,1.711,2.602,1.711,4.138
\tc0,1.547-0.621,3.06-1.711,4.15c-1.101,1.09-2.602,1.723-4.15,1.723c-1.534,0-3.048-0.633-4.138-1.723
\tc-1.09-1.09-1.723-2.602-1.723-4.15C373.096,356.319,373.729,354.82,374.818,353.729z M193.087,362.018
\tc-1.091,1.09-2.604,1.711-4.15,1.711c-1.537,0-3.049-0.621-4.138-1.711c-1.102-1.09-1.723-2.602-1.723-4.15
\tc0-1.536,0.62-3.048,1.723-4.138c1.09-1.09,2.591-1.723,4.138-1.723c1.546,0,3.058,0.633,4.15,1.723
\tc1.09,1.09,1.711,2.602,1.711,4.138C194.798,359.414,194.177,360.927,193.087,362.018z M193.087,63.799
\tc-1.091,1.09-2.604,1.711-4.15,1.711c-1.537,0-3.049-0.621-4.138-1.711c-1.102-1.09-1.723-2.602-1.723-4.15
\tc0-1.536,0.62-3.048,1.723-4.15c1.09-1.09,2.602-1.711,4.138-1.711c1.546,0,3.058,0.621,4.15,1.711
\tc1.09,1.102,1.711,2.614,1.711,4.15C194.798,61.197,194.177,62.709,193.087,63.799z M383.107,63.799
\tc-1.09,1.09-2.602,1.711-4.15,1.711s-3.048-0.621-4.138-1.711c-1.09-1.09-1.723-2.602-1.723-4.15s0.633-3.06,1.723-4.15
\tc1.091-1.09,2.591-1.711,4.138-1.711s3.06,0.621,4.15,1.711c1.09,1.102,1.711,2.614,1.711,4.15
\tC384.819,61.197,384.196,62.709,383.107,63.799z"/>
<path style="fill:#FFAA2A;" d="M143.887,405.801h280.125V279.741h-17.778v99.937c0,3.237-2.624,5.861-5.861,5.861H167.526
\tc-3.238,0-5.861-2.625-5.861-5.861V37.843c0-3.237,2.623-5.861,5.861-5.861h232.846c3.238,0,5.861,2.625,5.861,5.861v99.938h17.778
\tV11.722H143.887V405.801z"/>
<path style="fill:#754C24;" d="M223.709,208.762l60.24,117.398l60.24-117.395l-60.24-117.4L223.709,208.762z M289.164,134.815
\tl36.57,71.271c0.896,1.744,0.818,3.723-0.012,5.345l0.013,0.007l-36.572,71.27c-1.002,1.955-3.016,3.185-5.214,3.185
\tc-2.198,0-4.212-1.23-5.214-3.185l-36.57-71.27c-0.896-1.745-0.818-3.724,0.013-5.345l-0.013-0.006l36.57-71.271
\tc1.002-1.955,3.016-3.185,5.214-3.185C286.148,131.631,288.162,132.86,289.164,134.815z"/>
<polygon style="fill:#FFAA2A;" points="253.966,208.762 283.95,267.194 313.933,208.763 283.95,150.329 "/>
<path style="fill:#754C24;" d="M400.373,239.01c4.271,0,7.744-3.475,7.744-7.746V186.26c0-4.272-3.475-7.746-7.744-7.746
\tc-4.273,0-7.747,3.475-7.747,7.746v45.004C392.626,235.535,396.102,239.01,400.373,239.01z"/>
<path style="fill:#E6E6E6;" d="M401.531,417.523H133.912c-12.055,0-21.862,9.808-21.862,21.862l0.001,18.327
\tc0,12.055,9.808,21.862,21.863,21.862h25.014V454.41h-17.448c-3.238,0-5.861-2.625-5.861-5.861s2.623-5.861,5.861-5.861h92.803
\tc3.238,0,5.861,2.625,5.861,5.861s-2.623,5.861-5.861,5.861h-23.702v25.165h190.833c-0.74-1.966-1.156-4.089-1.156-6.313v-49.116
\tC400.26,421.808,400.717,419.577,401.531,417.523z"/>
<path d="M278.736,134.815l-36.57,71.271l0.013,0.006c-0.831,1.621-0.907,3.6-0.013,5.345l36.57,71.27
\tc1.002,1.955,3.016,3.185,5.214,3.185c2.198,0,4.212-1.23,5.214-3.185l36.572-71.27l-0.013-0.007c0.83-1.621,0.906-3.6,0.012-5.345
\tl-36.57-71.271c-1.002-1.955-3.016-3.185-5.214-3.185C281.752,131.629,279.738,132.86,278.736,134.815z M313.933,208.763
\tl-29.984,58.43l-29.984-58.432l29.984-58.433L313.933,208.763z"/>
<path d="M188.937,53.788c-1.537,0-3.049,0.621-4.138,1.711c-1.102,1.102-1.723,2.614-1.723,4.15c0,1.547,0.62,3.06,1.723,4.15
\tc1.09,1.09,2.602,1.711,4.138,1.711c1.546,0,3.058-0.621,4.15-1.711c1.09-1.09,1.711-2.602,1.711-4.15
\tc0-1.536-0.621-3.048-1.711-4.15C191.996,54.41,190.483,53.788,188.937,53.788z"/>
<path d="M188.937,352.007c-1.547,0-3.049,0.633-4.138,1.723c-1.102,1.09-1.723,2.602-1.723,4.138c0,1.547,0.62,3.06,1.723,4.15
\tc1.09,1.09,2.602,1.711,4.138,1.711c1.546,0,3.058-0.621,4.15-1.711c1.09-1.09,1.711-2.602,1.711-4.15
\tc0-1.536-0.621-3.048-1.711-4.138C191.996,352.64,190.483,352.007,188.937,352.007z"/>
<path d="M378.958,53.788c-1.547,0-3.048,0.621-4.138,1.711c-1.09,1.09-1.723,2.602-1.723,4.15s0.633,3.06,1.723,4.15
\tc1.091,1.09,2.591,1.711,4.138,1.711s3.06-0.621,4.15-1.711c1.09-1.09,1.711-2.602,1.711-4.15c0-1.536-0.621-3.048-1.711-4.15
\tC382.017,54.41,380.505,53.788,378.958,53.788z"/>
<path d="M378.958,363.74c1.547,0,3.049-0.633,4.15-1.723c1.09-1.09,1.711-2.602,1.711-4.15c0-1.536-0.621-3.048-1.711-4.138
\tc-1.101-1.09-2.602-1.723-4.15-1.723c-1.534,0-3.048,0.633-4.138,1.723c-1.09,1.09-1.723,2.591-1.723,4.138s0.633,3.06,1.723,4.15
\tC375.91,363.107,377.422,363.74,378.958,363.74z"/>
<path d="M400.373,250.732c10.734,0,19.466-8.733,19.466-19.469V186.26c0-10.735-8.732-19.469-19.466-19.469
\tc-10.735,0-19.47,8.734-19.47,19.469v45.004C380.904,241.999,389.638,250.732,400.373,250.732z M392.626,186.261
\tc0-4.272,3.476-7.746,7.747-7.746c4.271,0,7.744,3.475,7.744,7.746v45.004c0,4.272-3.475,7.746-7.744,7.746
\tc-4.273,0-7.747-3.475-7.747-7.746V186.261z"/>
<path d="M429.873,0H109.851C91.332,0,76.266,15.067,76.266,33.586v424.128c0,18.519,15.067,33.585,33.586,33.585h49.076v14.841
\tc0,2.376,1.435,4.517,3.633,5.42c2.196,0.903,4.722,0.39,6.395-1.298l15.801-15.962l15.801,15.962
\tc1.123,1.135,2.632,1.738,4.167,1.738c0.75,0,1.506-0.144,2.227-0.441c2.198-0.904,3.633-3.045,3.633-5.42v-14.841h219.289
\tc3.238,0,5.861-2.625,5.861-5.861s-2.623-5.861-5.861-5.861H417.4c-3.063-0.472-5.419-3.119-5.419-6.313v-49.116
\tc0-3.526,2.868-6.624,6.395-6.624c0.536,0,11.497,0,11.497,0c3.238,0,5.861-2.625,5.861-5.861V5.861
\tC435.734,2.625,433.11,0,429.873,0z M87.988,457.713v-18.327c0-11.558,9.023-21.025,20.392-21.788
\tc-5.016,5.869-8.053,13.48-8.053,21.788l0.001,18.327c0,8.31,3.041,15.919,8.058,21.788
\tC97.014,478.741,87.988,469.273,87.988,457.713z M109.851,405.801c-8.345,0-15.984,3.067-21.862,8.122V33.586
\tc0-12.055,9.807-21.863,21.862-21.863h22.314v394.078H109.851z M198.86,491.885l-9.939-10.041c-1.101-1.112-2.601-1.737-4.166-1.737
\ts-3.064,0.626-4.166,1.737l-9.939,10.041V454.41h28.209v37.475H198.86z M401.415,479.576H210.583v-25.165h23.702
\tc3.238,0,5.861-2.625,5.861-5.861s-2.623-5.861-5.861-5.861h-92.803c-3.238,0-5.861,2.625-5.861,5.861s2.623,5.861,5.861,5.861
\th17.448v25.165h-25.014c-12.055,0-21.863-9.808-21.863-21.862l-0.001-18.327c0-12.055,9.807-21.862,21.862-21.862h267.619
\tc-0.814,2.054-1.272,4.285-1.272,6.624v49.116C400.26,475.487,400.676,477.61,401.415,479.576z M424.012,268.019h-97.052
\tl29.034-56.582l-0.014-0.007c0.83-1.622,0.906-3.6,0.012-5.345l-29.034-56.582h97.055L424.012,268.019L424.012,268.019z
\t M289.164,75.85c-1.002-1.955-3.016-3.185-5.214-3.185c-2.198,0-4.212,1.23-5.214,3.185l-66.828,130.237l0.012,0.006
\tc-0.83,1.621-0.906,3.6-0.012,5.345l66.828,130.236c1.002,1.955,3.016,3.185,5.214,3.185c2.198,0,4.212-1.23,5.214-3.185
\tl31.78-61.933h73.568v94.076H173.387V43.705h221.123v94.077h-73.569L289.164,75.85z M344.19,208.765L283.95,326.16l-60.24-117.398
\tl60.24-117.398L344.19,208.765z M424.012,137.782h-17.778V37.843c0-3.237-2.624-5.861-5.861-5.861H167.526
\tc-3.238,0-5.861,2.625-5.861,5.861V379.68c0,3.237,2.623,5.861,5.861,5.861h232.846c3.238,0,5.861-2.625,5.861-5.861v-99.937h17.778
\tv126.059H143.887V11.722h280.125V137.782z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`

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
    armorClass: new UntypedFormControl({value: null}),
    initiative: new UntypedFormControl({value: null}),
    speed: new UntypedFormControl({value: null}),
    draconicAncestry: new UntypedFormControl({value: null}),
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

  displayedColumns: string[] = ['Characteristic', 'Modifier'];
  dataSource: {characteristicName: string, savingThrowModifier: number}[] = [];
  races: IRace[] = [
    {name: 'Dragonborn', speed: 30},
    {name: 'Dwarf', speed: 25},
    {name: 'Elf', speed: 30},
    {name: 'Gnome', speed: 25},
    {name: 'Half-Elf', speed: 30},
    {name: 'Half-Orc', speed: 30},
    {name: 'Halfling', speed: 25},
    {name: 'Human', speed: 30},
    {name: 'Tiefling', speed: 30},
  ];
  draconicAncestry: string[] = [
    'Black',
    'Blue',
    'Brass',
    'Bronze',
    'Copper',
    'Gold',
    'Green',
    'Red',
    'Silver',
    'White',
  ];

  constructor(private dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('spellbook', sanitizer.bypassSecurityTrustHtml(SPELLBOOK_SVG));
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
    this.generalInformation.get('draconicAncestry')?.setValue('')
    this.generalInformation.get('maxHp')?.setValue(this.characterHpHandler())
    this.generalInformation.get('proficiencyBonus')?.setValue(this.getProficiencyBonusValue())
    this.generalInformation.get('armorClass')?.setValue(this.getArmorClassValue())
    this.generalInformation.get('initiative')?.setValue(this.getInitiativeValue())
    this.generalInformation.get('speed')?.setValue(this.getChosenRaceSpeed())

    this.dataSource = this.getSavingThrowsModifiers();

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
    this.dataSource = this.getSavingThrowsModifiers();
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
    this.dataSource = this.getSavingThrowsModifiers();
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

  getInitiativeValue(): number {
    return this.calculateModificator('dexterity');
  }

  getSavingThrowsModifiers(): {characteristicName: string, savingThrowModifier: number}[] {
    return [
      {characteristicName: 'STR', savingThrowModifier: this.calculateModificator('strength')},
      {characteristicName: 'DEX', savingThrowModifier: this.calculateModificator('dexterity')},
      {characteristicName: 'CON', savingThrowModifier: this.calculateModificator('constitution')},
      {characteristicName: 'INT', savingThrowModifier: this.calculateModificator('intellect')},
      {characteristicName: 'WIS', savingThrowModifier: this.calculateModificator('wisdom')},
      {characteristicName: 'CHA', savingThrowModifier: this.calculateModificator('charisma')}
    ]
  }

  getChosenRaceSpeed(): number {
    const chosenRace = this.generalInformation.get('race')?.value;
    return chosenRace.speed
  }

  dragonAncestryHandleValidator(){
    const race = this.generalInformation.get('race')?.value.name
    if(race === 'Dragonborn'){
      this.generalInformation.controls['draconicAncestry'].setValidators([Validators.required])
    } else {
      this.generalInformation.controls['draconicAncestry'].removeValidators([Validators.required])
    }
  }

  openSpellbook(enterAnimationDuration: string, exitAnimationDuration: string) {
    let dialogRef: MatDialogRef<SpellbookComponent>;
    const data = this.generalInformation.value
    if(this.generalInformation.valid){
      dialogRef = this.dialog.open(SpellbookComponent, {
        data,
        enterAnimationDuration,
        exitAnimationDuration
      })
      const sub = dialogRef.afterClosed()
        .subscribe(value => {
          sub.unsubscribe()
          console.log(value)
        })
    }
  }
}

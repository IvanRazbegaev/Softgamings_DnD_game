import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CharacterCreationSheetComponent} from './character-creation-sheet/character-creation-sheet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {SpellbookComponent} from './spellbook/spellbook.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SpellPipe} from './pipes/spell.pipe';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ItemDescriptionPipe } from './pipes/item-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreationSheetComponent,
    SpellbookComponent,
    SpellPipe,
    ItemDescriptionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    MatRadioModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

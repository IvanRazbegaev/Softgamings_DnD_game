import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationSheetComponent } from './character-creation-sheet.component';

describe('CharacterCreationSheetComponent', () => {
  let component: CharacterCreationSheetComponent;
  let fixture: ComponentFixture<CharacterCreationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreationSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

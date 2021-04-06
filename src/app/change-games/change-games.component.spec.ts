import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGamesComponent } from './change-games.component';

describe('ChangeGamesComponent', () => {
  let component: ChangeGamesComponent;
  let fixture: ComponentFixture<ChangeGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

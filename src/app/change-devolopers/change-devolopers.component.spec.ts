import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDevolopersComponent } from './change-devolopers.component';

describe('ChangeDevolopersComponent', () => {
  let component: ChangeDevolopersComponent;
  let fixture: ComponentFixture<ChangeDevolopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDevolopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDevolopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDevolopersDetailComponent } from './change-devolopers-detail.component';

describe('ChangeDevolopersDetailComponent', () => {
  let component: ChangeDevolopersDetailComponent;
  let fixture: ComponentFixture<ChangeDevolopersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDevolopersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDevolopersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

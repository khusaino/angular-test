import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolopersComponent } from './devolopers.component';

describe('DevolopersComponent', () => {
  let component: DevolopersComponent;
  let fixture: ComponentFixture<DevolopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

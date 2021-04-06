import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGenresComponent } from './change-genres.component';

describe('ChangeGenresComponent', () => {
  let component: ChangeGenresComponent;
  let fixture: ComponentFixture<ChangeGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

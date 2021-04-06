import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGameDetailComponent } from './change-game-detail.component';

describe('ChangeGameDetailComponent', () => {
  let component: ChangeGameDetailComponent;
  let fixture: ComponentFixture<ChangeGameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeGameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

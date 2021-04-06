import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePublishersComponent } from './change-publishers.component';

describe('ChangePublishersComponent', () => {
  let component: ChangePublishersComponent;
  let fixture: ComponentFixture<ChangePublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePublishersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

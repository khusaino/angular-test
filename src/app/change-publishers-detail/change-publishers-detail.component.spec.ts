import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePublishersDetailComponent } from './change-publishers-detail.component';

describe('ChangePublishersDetailComponent', () => {
  let component: ChangePublishersDetailComponent;
  let fixture: ComponentFixture<ChangePublishersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePublishersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePublishersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

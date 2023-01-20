import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormModalComponent } from './review-form-modal.component';

describe('ReviewFormModalComponent', () => {
  let component: ReviewFormModalComponent;
  let fixture: ComponentFixture<ReviewFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

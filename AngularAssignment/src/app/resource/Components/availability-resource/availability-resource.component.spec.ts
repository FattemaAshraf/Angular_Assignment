import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityResourceComponent } from './availability-resource.component';

describe('AvailabilityResourceComponent', () => {
  let component: AvailabilityResourceComponent;
  let fixture: ComponentFixture<AvailabilityResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailabilityResourceComponent]
    });
    fixture = TestBed.createComponent(AvailabilityResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

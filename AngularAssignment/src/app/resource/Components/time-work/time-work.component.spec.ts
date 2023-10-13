import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWorkComponent } from './time-work.component';

describe('TimeWorkComponent', () => {
  let component: TimeWorkComponent;
  let fixture: ComponentFixture<TimeWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeWorkComponent]
    });
    fixture = TestBed.createComponent(TimeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

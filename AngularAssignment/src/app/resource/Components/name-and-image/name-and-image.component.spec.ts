import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndImageComponent } from './name-and-image.component';

describe('NameAndImageComponent', () => {
  let component: NameAndImageComponent;
  let fixture: ComponentFixture<NameAndImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameAndImageComponent]
    });
    fixture = TestBed.createComponent(NameAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

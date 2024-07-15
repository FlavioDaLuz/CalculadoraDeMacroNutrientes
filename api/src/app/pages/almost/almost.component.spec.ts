import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostComponent } from './almost.component';

describe('AlmostComponent', () => {
  let component: AlmostComponent;
  let fixture: ComponentFixture<AlmostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

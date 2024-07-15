import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostHeaderComponent } from './almost-header.component';

describe('AlmostHeaderComponent', () => {
  let component: AlmostHeaderComponent;
  let fixture: ComponentFixture<AlmostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmostHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

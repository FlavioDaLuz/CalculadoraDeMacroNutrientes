import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostBodyComponent } from './almost-body.component';

describe('AlmostBodyComponent', () => {
  let component: AlmostBodyComponent;
  let fixture: ComponentFixture<AlmostBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmostBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

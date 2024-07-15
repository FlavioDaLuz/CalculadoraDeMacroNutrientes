import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeBodyComponent } from './wellcome-body.component';

describe('WellcomeBodyComponent', () => {
  let component: WellcomeBodyComponent;
  let fixture: ComponentFixture<WellcomeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellcomeBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellcomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

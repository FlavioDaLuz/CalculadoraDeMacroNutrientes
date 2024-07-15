import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeHeaderComponent } from './wellcome-header.component';

describe('WellcomeHeaderComponent', () => {
  let component: WellcomeHeaderComponent;
  let fixture: ComponentFixture<WellcomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellcomeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellcomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

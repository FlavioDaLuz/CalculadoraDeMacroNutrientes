import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeFooterComponent } from './wellcome-footer.component';

describe('WellcomeFooterComponent', () => {
  let component: WellcomeFooterComponent;
  let fixture: ComponentFixture<WellcomeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellcomeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellcomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

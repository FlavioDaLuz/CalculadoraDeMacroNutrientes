import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveFooterComponent } from './objective-footer.component';

describe('ObjectiveFooterComponent', () => {
  let component: ObjectiveFooterComponent;
  let fixture: ComponentFixture<ObjectiveFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectiveFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

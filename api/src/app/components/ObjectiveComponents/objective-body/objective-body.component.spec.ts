import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveBodyComponent } from './objective-body.component';

describe('ObjectiveBodyComponent', () => {
  let component: ObjectiveBodyComponent;
  let fixture: ComponentFixture<ObjectiveBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectiveBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

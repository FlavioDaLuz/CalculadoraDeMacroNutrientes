import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveHeaderComponent } from './objective-header.component';

describe('ObjectiveHeaderComponent', () => {
  let component: ObjectiveHeaderComponent;
  let fixture: ComponentFixture<ObjectiveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectiveHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectiveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeigthBodyComponent } from './weigth-body.component';

describe('WeigthBodyComponent', () => {
  let component: WeigthBodyComponent;
  let fixture: ComponentFixture<WeigthBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeigthBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeigthBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

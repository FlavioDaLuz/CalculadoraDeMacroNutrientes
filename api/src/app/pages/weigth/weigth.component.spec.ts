import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeigthComponent } from './weigth.component';

describe('WeigthComponent', () => {
  let component: WeigthComponent;
  let fixture: ComponentFixture<WeigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeigthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

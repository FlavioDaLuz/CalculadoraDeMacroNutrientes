import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeigthHeaderComponent } from './weigth-header.component';

describe('WeigthHeaderComponent', () => {
  let component: WeigthHeaderComponent;
  let fixture: ComponentFixture<WeigthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeigthHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeigthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

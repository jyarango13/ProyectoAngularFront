import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselAppComponent } from './carrusel-app.component';

describe('CarruselAppComponent', () => {
  let component: CarruselAppComponent;
  let fixture: ComponentFixture<CarruselAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

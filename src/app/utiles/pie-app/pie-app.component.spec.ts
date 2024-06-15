import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAppComponent } from './pie-app.component';

describe('PieAppComponent', () => {
  let component: PieAppComponent;
  let fixture: ComponentFixture<PieAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

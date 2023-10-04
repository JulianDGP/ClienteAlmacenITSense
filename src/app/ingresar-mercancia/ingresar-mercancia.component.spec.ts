import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarMercanciaComponent } from './ingresar-mercancia.component';

describe('IngresarMercanciaComponent', () => {
  let component: IngresarMercanciaComponent;
  let fixture: ComponentFixture<IngresarMercanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarMercanciaComponent]
    });
    fixture = TestBed.createComponent(IngresarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

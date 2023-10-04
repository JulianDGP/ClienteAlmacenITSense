import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarSalidaComponent } from './visualizar-salida.component';

describe('VisualizarSalidaComponent', () => {
  let component: VisualizarSalidaComponent;
  let fixture: ComponentFixture<VisualizarSalidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarSalidaComponent]
    });
    fixture = TestBed.createComponent(VisualizarSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

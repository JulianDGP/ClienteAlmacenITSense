import { Component } from '@angular/core';
import { Producto } from '../model/Producto.model';
import { ProductoService } from '../service/Producto.service';

@Component({
  selector: 'app-visualizar-salida',
  templateUrl: './visualizar-salida.component.html',
  styleUrls: ['./visualizar-salida.component.css']
})
export class VisualizarSalidaComponent {
  productosNoDisponibles: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductosNoDisponibles();
  }

  obtenerProductosNoDisponibles() {
    this.productoService.obtenerProductosNoDisponibles()
      .subscribe((productos) => {
        this.productosNoDisponibles = productos;
      });
  }
}

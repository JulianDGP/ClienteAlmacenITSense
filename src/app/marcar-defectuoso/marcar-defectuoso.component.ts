import { Component } from '@angular/core';
import { ProductoService } from '../service/Producto.service';

@Component({
  selector: 'app-marcar-defectuoso',
  templateUrl: './marcar-defectuoso.component.html',
  styleUrls: ['./marcar-defectuoso.component.css']
})
export class MarcarDefectuosoComponent {
  idProducto: number=0;

  constructor(private productoService: ProductoService) {}

  marcarComoDefectuoso() {
    this.productoService.marcarProductoComoDefectuoso(this.idProducto)
      .subscribe(() => {
        // Realiza acciones adicionales si es necesario
        console.log(`Producto con ID ${this.idProducto} marcado como defectuoso.`);
      });
  }
  
}

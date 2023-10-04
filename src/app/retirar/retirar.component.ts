import { Component } from '@angular/core';
import { ProductoService } from '../service/Producto.service';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent {
  idProducto: number=0;
  fechaRetiro: Date=new Date();

  constructor(private productoService: ProductoService) {}

  retirarProducto() {
    this.productoService.retirarProducto(this.idProducto, this.fechaRetiro)
      .subscribe(() => {
        // Realiza acciones adicionales si es necesario
        console.log(`Producto con ID ${this.idProducto} retirado.`);
      });
  }
}

import { Component } from '@angular/core';
import { ProductoService } from '../service/Producto.service';
import { EstadoProducto, TipoProducto } from '../model/enums';
import { Producto } from '../model/Producto.model';

@Component({
  selector: 'app-ingresar-mercancia',
  templateUrl: './ingresar-mercancia.component.html',
  styleUrls: ['./ingresar-mercancia.component.css']
})
export class IngresarMercanciaComponent {

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    estado: EstadoProducto.DISPONIBLE, // Establece el valor predeterminado según enum EstadoProducto
    tipo: TipoProducto.ELABORADO_A_MANO, // Establece el valor predeterminado según enum TipoProducto
    fechaIngreso: new Date(),
    fechaRetiro: null // Puede ser nulo si el producto no se ha retirado
  };

  cantidad: number = 1; // Valor predeterminado para la cantidad

  constructor(private productoService: ProductoService) {}

 ingresarMercancia() {
    // Llama al método del servicio para enviar la solicitud HTTP
    const productosIngresados: Producto[] = [];
    for (let i = 0; i < this.cantidad; i++) {
      const productoClon = { ...this.nuevoProducto };
      productosIngresados.push(productoClon);
    }

    this.productoService.ingresarMercancia(productosIngresados)
      .subscribe((productosIngresados) => {
        // Realiza acciones adicionales si es necesario, como actualizar la lista de productos en la vista
        console.log('Productos ingresados:', productosIngresados);
      });
  }
}

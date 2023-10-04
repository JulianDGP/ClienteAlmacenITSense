import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/Producto.service';

@Component({
  selector: 'app-visualizar-inventario',
  templateUrl: './visualizar-inventario.component.html',
  styleUrls: ['./visualizar-inventario.component.css']
})
export class VisualizarInventarioComponent implements OnInit{
  productos: any[] = [];
  filtroEstado: string = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    // Llama a un método del servicio para obtener los productos y asignarlos a this.productos
    this.productoService.getProductos(this.filtroEstado)
      .subscribe((data: any[]) => {
        this.productos = data;
      });
  }

  filtrarInventario() {
    // Llama al método del servicio para obtener productos filtrados por estado
    this.productoService.getProductos(this.filtroEstado)
      .subscribe((data: any[]) => {
        this.productos = data;
      });
  }
}

import { EstadoProducto, TipoProducto } from './enums'; // Importa los enums aquí

export interface Producto {
  id: number;
  nombre: string;
  estado: EstadoProducto; // Usa el enum EstadoProducto
  tipo: TipoProducto;     // Usa el enum TipoProducto
  fechaIngreso: Date;
  fechaRetiro: Date | null; // Puede ser nulo si el producto no se ha retirado
}

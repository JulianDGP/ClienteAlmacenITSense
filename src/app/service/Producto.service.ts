import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
   private apiUrl= 'http://localhost:8001/api/productos';

  constructor(private http:HttpClient) {}
  
  getProductos(estado?: string): Observable<Producto[]> {
    // Realiza una solicitud GET a /api/productos con un parámetro de estado opcional
    const url = estado ? `${this.apiUrl}?estado=${estado}` : this.apiUrl;
    return this.http.get<Producto[]>(url);
  }

  ingresarMercancia(productos: Producto[]): Observable<Producto[]> {
    return this.http.post<Producto[]>(`${this.apiUrl}`, productos);
  }

  marcarProductoComoDefectuoso(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}/marcar-defectuoso`;
    return this.http.post<void>(url, {});
  }

  retirarProducto(id: number, fechaRetiro: Date): Observable<void> {
    const url = `${this.apiUrl}/${id}/retirar`;
    return this.http.post<void>(url, { fechaRetiro });
  }

  obtenerProductosNoDisponibles(): Observable<Producto[]> {
    const url = `${this.apiUrl}/salidas`;
    return this.http.get<Producto[]>(url);
  }
  
}

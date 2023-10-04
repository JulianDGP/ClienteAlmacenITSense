import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarInventarioComponent } from './visualizar-inventario/visualizar-inventario.component';
import { IngresarMercanciaComponent } from './ingresar-mercancia/ingresar-mercancia.component';
import { MarcarDefectuosoComponent } from './marcar-defectuoso/marcar-defectuoso.component';
import { RetirarComponent } from './retirar/retirar.component';
import { VisualizarSalidaComponent } from './visualizar-salida/visualizar-salida.component';

const routes: Routes = [
  {path: 'visualizar-inventario', component: VisualizarInventarioComponent },
  {path: 'ingresar-mercancia', component: IngresarMercanciaComponent },
  {path: 'marcar-defectuoso', component: MarcarDefectuosoComponent },
  {path: 'retirar', component: RetirarComponent,},
  {path: 'visualizar-salida', component:VisualizarSalidaComponent},
  {path: '', component: VisualizarInventarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VisualizarInventarioComponent } from './visualizar-inventario/visualizar-inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IngresarMercanciaComponent } from './ingresar-mercancia/ingresar-mercancia.component';
import { MarcarDefectuosoComponent } from './marcar-defectuoso/marcar-defectuoso.component';
import { RetirarComponent } from './retirar/retirar.component';
import { VisualizarSalidaComponent } from './visualizar-salida/visualizar-salida.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { IndexComponent } from './index/index/index.component';
import { interceptorProvider } from './interceptors/producto-interceptors.service';


@NgModule({
  declarations: [
    AppComponent,
    VisualizarInventarioComponent,
    NavBarComponent,
    IngresarMercanciaComponent,
    MarcarDefectuosoComponent,
    RetirarComponent,
    VisualizarSalidaComponent,
    OrderByPipe,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ProductosComponent } from './components/productos/productos.component';
import {ProductosService} from './productos.service';
import { TargetaProductoComponent } from './components/targeta-producto/targeta-producto.component'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    ErrorComponent,
    AgregarComponent,
    ProductosComponent,
    TargetaProductoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductosService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

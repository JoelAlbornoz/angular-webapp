import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [{path:'home', component: HomeComponent}, {path:'edit', component:EditComponent}, {path:'productos', component:ProductosComponent}, {path:'agregar', component: AgregarComponent}, {path:'error', component:ErrorComponent}, {path:'**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

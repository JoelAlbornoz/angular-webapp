import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto'
import {ProductosService} from '../../productos.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  

  constructor(public productosService : ProductosService, public router:Router) { }

  ngOnInit(): void {
    this.solicitarProductos()
  }

   solicitarProductos(){
    this.productosService.fetchProductos()
    
  }
   eliminarProducto(data){
    this.productosService.borrarProducto(data)
    setTimeout(()=>{this.solicitarProductos()},1000)
    //this.change.detectChanges() 
   }
   editarProducto(producto){
    this.router.navigateByUrl('/agregar/' + producto._id);
   }
}

import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto' 
import { ProductosService } from 'src/app/productos.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  producto : Producto;
  update= false  


  constructor(public productosService : ProductosService, private route: ActivatedRoute) { 
    this.producto = new Producto('','',0,'');
  }

  ngOnInit(): void {
      if(this.route.snapshot.paramMap.get("id")){
        this.productosService.fetchProductos();
        for(let i = 0 ; i< this.productosService.productos.length; i++){
          if (this.route.snapshot.paramMap.get('id')===this.productosService.productos[i]._id){
            this.producto = this.productosService.productos[i]  
            console.log('encontrado')
          }
        }
        this.update = true
      }
  }

  onSubmit(){
    this.update ? this.productosService.actualizarProducto(this.producto._id, this.producto) : this.productosService.subirProducto(this.producto) 
  }
  resetImage(){
    this.producto.img =''
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto} from '../models/producto'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto: Producto;
  productos : Array<Producto>


  constructor( private http :HttpClient) {
    this.http.get('https://angular-product-server.glitch.me/dreams').subscribe((data)=> {console.log(data)});
   }

   fetchProductos(){
    let productos
    this.http.get('https://angular-product-server.glitch.me/productos').subscribe((data)=> {productos = data});
    this.productos = productos;
    return productos
   }

   subirProducto(producto){
     this.http.post('https://angular-product-server.glitch.me/productos', producto).subscribe((data) => {console.log(data)})
   }

   borrarProducto(producto){
    this.http.delete('https://angular-product-server.glitch.me/productos', producto).subscribe((data) => {console.log(data)})
   }

   actualizarProducto(producto){
    this.http.delete('https://angular-product-server.glitch.me/productos', producto).subscribe((data) => {console.log(data)})
   }
}

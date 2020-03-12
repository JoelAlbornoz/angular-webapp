import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto'
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  producto : Producto;

  constructor() { 
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submit')
  }

}

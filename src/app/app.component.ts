import { Component } from '@angular/core';
import{ ProductosService} from './productos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductosService]
})
export class AppComponent {
  title = 'angular-webapp';

  constructor( private httpService : ProductosService){
    
  }
  ngOnInit(): void {
     console.log(this.httpService.borrarProducto('5e697b0c635e9123b14b1731'))
  }
}

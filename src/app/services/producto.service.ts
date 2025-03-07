import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos:Producto[]=[
    new Producto(1, 'Liverpool Retro Jersey', 1500, 'assets/liverpool.jpeg'),
    new Producto(2, 'Barcelona Retro Jersey', 1000, 'assets/barcelona.jpg'),
    new Producto(3, 'Milan Retro Jersey', 850, 'assets/atletico.jpg'),
    new Producto(4, 'Celtic Retro Jersey', 400, 'assets/celtic.jpg'),
    new Producto(5, 'Borussia Dortmund Retro Jersey', 800, 'assets/dortmund.jpg'),
    new Producto(6, 'Roma Retro Jersey', 750, 'assets/roma.jpg')
  ];
  
  obtenerProducto():Producto[]{
     return this.productos;
  }
}
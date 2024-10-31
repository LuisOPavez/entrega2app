import { Component, OnInit } from '@angular/core';
import { ApiProductosService } from 'src/app/service/api-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public titulo:String="Productos";
  items:any=[];

  constructor(private apiproductosService: ApiProductosService) { }

  ngOnInit(): void {
    this.apiproductosService.obtenerProductos().subscribe((Productos)=>{
      console.log('se traen los productos');
      this.items= Productos;
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


  interface Productos {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}


@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>
    ('https://fakestoreapi.com/products/category/electronics');
  }



}

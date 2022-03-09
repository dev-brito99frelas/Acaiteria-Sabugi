import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url:string = "http://localhost:3000/"; //products

  constructor(private http: HttpClient) { }
  public trazerListProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.url}products`).pipe(
      res=>res,
      error=>error
    );
  }
}

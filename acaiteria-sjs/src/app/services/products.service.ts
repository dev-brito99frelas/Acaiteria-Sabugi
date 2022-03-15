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
  public addList(value:Product):Observable<Product>{
    const {id,name,providerId=0,profile,preco} = value;
    return this.http.post<Product>(`${this.url}products`,{id,name,providerId,profile,preco}).pipe(
      res=>res,
      error=>error
    );

  }
}

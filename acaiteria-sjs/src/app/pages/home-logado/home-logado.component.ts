import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.component.html',
  styleUrls: ['./home-logado.component.sass']
})
export class HomeLogadoComponent implements OnInit {

  public listProducts:Array<Product> = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.trazerListProducts().subscribe(res => this.listProducts = res);
  }

}

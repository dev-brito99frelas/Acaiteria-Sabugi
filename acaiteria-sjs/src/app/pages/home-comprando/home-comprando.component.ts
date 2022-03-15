import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-comprando',
  templateUrl: './home-comprando.component.html',
  styleUrls: ['./home-comprando.component.sass']
})
export class HomeComprandoComponent implements OnInit {

  public listcardsProducts:Array<Product> = [];

  constructor(private productsService:ProductsService) { }
  ngOnInit(): void {
    this.productsService.trazerListProducts().subscribe(res => this.listcardsProducts = res);

  }

}

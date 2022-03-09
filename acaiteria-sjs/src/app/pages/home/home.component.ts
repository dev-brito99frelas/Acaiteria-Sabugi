import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public imagemAcai:string = "../../../assets/recanto_1.png";
  public listProducts:Array<Product> = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.trazerListProducts().subscribe(res => this.listProducts = res);
  }

}

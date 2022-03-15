import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.sass']
})
export class NewProductComponent implements OnInit {
  public nome:string ="";
  public preco:number =0;
  public imagem:string ="";
  public descricao:string ="";

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  public addItemList(){
    const pr = new Product();
    pr.name= this.nome;
    pr.profile = this.imagem;
    pr.preco = this.preco;
    return this.productsService.addList(pr).subscribe(res=>res);
  }

}

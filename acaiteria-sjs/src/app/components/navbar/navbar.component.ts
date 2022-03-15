import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  private  alturaDefault:number = 5;
  @Input() linkPaginas:Array<string> = ["home-logado","sobre","contato","home-buy"];

  constructor() { }

  ngOnInit(): void {
  }
  public getAlturaDefaul(){
    return this.alturaDefault;
  }

}

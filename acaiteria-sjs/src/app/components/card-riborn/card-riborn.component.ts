import { Component, Input, OnInit } from '@angular/core';

/**
* @description é um componente de cartão pesonalizado, possui como Inputs.
*
* @param {string} widthth @Input a largura.
* @param {string} heigth @Input a altura do card.
* @param {string} cor @Input o cor do realce ao titulo do cartção.
* @param {string} title @Input o titulo do cartão.
* @param {string} content @Input um texto introdutorio
* @param {string} profile @Input a imagem que é renderizada no cartão.
* @return{ }
**/
@Component({
  selector: 'app-card-riborn',
  templateUrl: './card-riborn.component.html',
  styleUrls: ['./card-riborn.component.sass']
})
export class CardRibornComponent implements OnInit {
  @Input() public cor:string="";
  @Input() public title:string="";
  @Input() public content:string="";
  @Input() public profile:string="";

  @Input() public cardContWidth:string="230px";
  @Input() public cardContHeight:string="315px";
  public corpoCardWidth:string="";
  public corpoCardHeight:string="";

  constructor() { }

  ngOnInit(): void {
    this.corpoCardWidth = this.calcTamnhoCard(this.cardContWidth);
    this.corpoCardHeight = this.calcTamnhoCard(this.cardContHeight);
  }
  public calcTamnhoCard(n:string):string{
    const x = n.split('p');
    const y = parseInt(x[0]);
    return (y-50)+"px";
  }

}

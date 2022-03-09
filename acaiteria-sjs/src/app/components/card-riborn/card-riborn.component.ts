import { Component, Input, OnInit } from '@angular/core';

/**
* @description é um componente de cartão pesonalizado, possui como Inputs.
*
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

  constructor() { }

  ngOnInit(): void {
  }

}

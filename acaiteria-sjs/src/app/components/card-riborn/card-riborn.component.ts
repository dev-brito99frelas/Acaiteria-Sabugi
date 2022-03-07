import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-riborn',
  templateUrl: './card-riborn.component.html',
  styleUrls: ['./card-riborn.component.sass']
})
export class CardRibornComponent implements OnInit {
  public title:string="Dev. JAvaScrIpt";
  public content:string="Algum texto bem especifico sobre";
  public profile:string="https://picsum.photos/200/300";

  constructor() { }

  ngOnInit(): void {
  }

}

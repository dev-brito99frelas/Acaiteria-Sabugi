import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public alturaDefault:number = 10;
  public logoDefault:string="Açaiteria Sabugi";

  constructor() { }

  ngOnInit(): void {
  }

}

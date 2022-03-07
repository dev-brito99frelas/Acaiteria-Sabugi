import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public imagemAcai:string = "../../../assets/recanto_1.png";

  constructor() { }

  ngOnInit(): void {
  }

}

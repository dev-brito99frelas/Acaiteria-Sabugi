import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  private  alturaDefault:number = 50;
  constructor() { }

  ngOnInit(): void {
  }
  public getAlturaDefaul(){
    return this.alturaDefault;
  }

}

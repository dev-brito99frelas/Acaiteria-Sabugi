import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

//Componnets
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLogadoComponent } from './home-logado/home-logado.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeLogadoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
    HomeLogadoComponent
  ]
})
export class PagesModule { }

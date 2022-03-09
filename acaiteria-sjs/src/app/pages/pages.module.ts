import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

//Componnets
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class PagesModule { }

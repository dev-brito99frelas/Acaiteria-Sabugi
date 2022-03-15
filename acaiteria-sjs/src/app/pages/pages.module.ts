import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

//Componnets
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLogadoComponent } from './home-logado/home-logado.component';
import { HomeComprandoComponent } from './home-comprando/home-comprando.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    HomeLogadoComponent,
    HomeComprandoComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    HomeLogadoComponent,
    HomeComprandoComponent,
    NewProductComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComprandoComponent } from './pages/home-comprando/home-comprando.component';
import { HomeLogadoComponent } from './pages/home-logado/home-logado.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home-logado", component:HomeLogadoComponent},
  {path:"home-buy", component:HomeComprandoComponent},
  {path:"new", component:NewProductComponent},
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

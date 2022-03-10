import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLogadoComponent } from './pages/home-logado/home-logado.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home-logado", component:HomeLogadoComponent},
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

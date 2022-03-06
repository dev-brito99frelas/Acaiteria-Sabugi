import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerPrincipalComponent } from './layer-principal/layer-principal.component';



@NgModule({
  declarations: [
    LayerPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayerPrincipalComponent
  ]
})
export class LayersModule { }

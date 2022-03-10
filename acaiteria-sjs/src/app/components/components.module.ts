import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardRibornComponent } from './card-riborn/card-riborn.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CardRibornComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CardRibornComponent
  ]
})
export class ComponentsModule { }

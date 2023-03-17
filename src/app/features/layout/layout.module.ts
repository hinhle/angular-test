import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './container/layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RecommendationBarComponent } from './components/recommendation-bar/recommendation-bar.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    TopbarComponent,
    RecommendationBarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

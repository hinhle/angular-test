import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './container/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RecommendationBarComponent } from './components/recommendation-bar/recommendation-bar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatListModule } from '@angular/material/list';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RmdLinkPipePipe } from 'src/app/shared/pipes/rmd-link-pipe.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    TopbarComponent,
    RecommendationBarComponent,
    RmdLinkPipePipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutRoutingModule,
    MatListModule,
    BreadcrumbModule,
  ],
})
export class LayoutModule {}

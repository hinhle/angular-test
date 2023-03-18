import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
        data: {breadcrumb: 'Dashboard'}
      },
      {
        path: 'recommend',
        loadChildren: () => import('../recommendation/recommendation.module').then(m => m.RecommendationModule),
        data: {breadcrumb: 'Recommendation'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';

export const routes: Routes = [
  {
    path: ':id',
    component: RecommendationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationRoutingModule {}

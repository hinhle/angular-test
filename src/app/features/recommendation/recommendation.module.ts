import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';
import { RecommendationTableComponent } from './components/recommendation-table/recommendation-table.component';
import { RecommendationGridComponent } from './components/recommendation-grid/recommendation-grid.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';



@NgModule({
  declarations: [
    RecommendationComponent,
    RecommendationTableComponent,
    RecommendationGridComponent
  ],
  imports: [
    CommonModule,
    RecommendationRoutingModule
  ]
})
export class RecommendationModule { }

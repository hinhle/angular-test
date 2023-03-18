import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';
import { RecommendationTableComponent } from './components/recommendation-table/recommendation-table.component';
import { RecommendationGridComponent } from './components/recommendation-grid/recommendation-grid.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecommendationComponent,
    RecommendationTableComponent,
    RecommendationGridComponent,
  ],
  imports: [
    CommonModule,
    RecommendationRoutingModule,
    MatButtonToggleModule,
    FormsModule,
  ],
})
export class RecommendationModule {}

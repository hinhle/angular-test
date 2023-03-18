 import { Component } from '@angular/core';
import { RecommendButton } from 'src/app/shared/models/recommend-button.model';

@Component({
  selector: 'app-recommendation-bar',
  templateUrl: './recommendation-bar.component.html',
  styleUrls: ['./recommendation-bar.component.scss']
})
export class RecommendationBarComponent {
  greenLiquorBtn: RecommendButton = {
    id: 'green_liquor',
    disabled: false
  }
  fsBtn: RecommendButton = {
    id: 'fs',
    disabled: false
  }
  tankOneBtn: RecommendButton = {
    id: 'tank_one',
    disabled: false
  }
  tankTwoBtn: RecommendButton = {
    id: 'tank_two',
    disabled: false
  }
  tankThreeBtn: RecommendButton = {
    id: 'tank_three',
    disabled: false
  }
}

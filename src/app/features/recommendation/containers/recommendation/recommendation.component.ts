import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit{
    view: string = 'grid';
    id: string = '';
    constructor(private activatedRoute : ActivatedRoute, private router: Router) {}

    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(
        params => {
          if (params['view']) {
            this.view = params['view'];
          } else {
            this.view = 'grid';
          }
        }
      );
      this.activatedRoute.params.subscribe(
        params => {
          if (params['id']) {
            this.id = params['id'];
          }
        }
      )
    }

    handleBtnToggle({value}: MatButtonToggleChange) {
      this.router.navigate(['recommend', this.id], {queryParams: {view: value}});
    }
}

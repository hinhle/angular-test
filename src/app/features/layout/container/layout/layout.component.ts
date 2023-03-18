import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { NavbarOption } from 'src/app/shared/models/navbar-option.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.observePotrait();
  }
  expanded: boolean = true;  

  listOptions: NavbarOption[] = [
    {
      icon: 'fa fa-charging-station',
      title: 'Dashboard',
      link: '/home',
    },
    {
      icon:  'fa fa-circle-dot',
      title: 'Recommendation',
      link: '/recommend/green_liquor'
    }
  ]

  observePotrait() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(
      res => {
        this.expanded = !res.matches;
      }
    )
  }

  handleToggleNavbar(): void {
    this.expanded = !this.expanded;
  }
}

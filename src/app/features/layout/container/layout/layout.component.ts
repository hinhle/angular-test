import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavbarOption } from 'src/app/shared/models/navbar-option.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  expanded: boolean = true;

  listOptions: NavbarOption[] = [
    {
      icon: 'fa fa-charging-station',
      title: 'Dashboard',
      link: '/home',
    },
    {
      icon: 'fa fa-circle-dot',
      title: 'Recommendation',
      link: '/recommend/green_liquor',
    },
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    this.redirectToHome(url);

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((res: any) => {
        const url = res.urlAfterRedirects;
        this.redirectToHome(url);
      });

    this.observePotrait();
  }

  redirectToHome(url: string) {
    if (url === '/' || url === '/recommend') {
      this.router.navigate(['home']);
    }
  }

  observePotrait() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.expanded = !res.matches;
      });
  }

  handleToggleNavbar(): void {
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }
}

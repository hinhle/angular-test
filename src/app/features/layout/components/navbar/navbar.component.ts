import { Component, Input } from '@angular/core';
import { NavbarOption } from 'src/app/shared/models/navbar-option.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() listOptions: NavbarOption[] = [];
  @Input() expanded: boolean = true;
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() toggleNavbar = new EventEmitter();

  handleClickMenuIcon(): void {
    this.toggleNavbar.emit();
  }
}

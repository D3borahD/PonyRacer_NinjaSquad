import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  readonly navbarCollapsed = signal(true);

  protected toggleNavbar() {
    this.navbarCollapsed.update(v => !v);
  }
}

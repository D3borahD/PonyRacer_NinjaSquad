import { Component, signal } from '@angular/core';
import { Menu } from './menu/menu';
import { Races } from './races/races';

@Component({
  selector: 'pr-root',
  imports: [Menu, Races],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ponyracer');
}

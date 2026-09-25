import { Component, computed, input, output } from '@angular/core';
import { PonyModel } from '../models/pony-model';

@Component({
  selector: 'pr-pony',
  imports: [],
  templateUrl: './pony.html',
  standalone: true,
  styleUrl: './pony.css'
})
export class Pony {
  public readonly ponyModel = input.required<PonyModel>();

  public readonly ponyName = computed(() => this.ponyModel().name);
  public readonly ponyImageUrl = computed(() => `images/pony-${this.ponyModel().color.toLowerCase()}.gif`);
  public readonly ponySelected = output<PonyModel>();

  protected selectPony(): void {
    this.ponySelected.emit(this.ponyModel());
  }
}

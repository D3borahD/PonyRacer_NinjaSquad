import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';

@Component({
  selector: 'pr-race',
  imports: [Pony],
  templateUrl: './race.html',
  standalone: true,
  styleUrl: './race.css'
})
export class Race {
  public readonly raceModel = input.required<RaceModel>();
}

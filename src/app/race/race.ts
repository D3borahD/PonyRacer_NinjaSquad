import { Component, input } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';
import { FromNowPipe } from '../from-now-pipe';

@Component({
  selector: 'pr-race',
  imports: [Pony, FromNowPipe],
  templateUrl: './race.html',
  standalone: true,
  styleUrl: './race.css'
})
export class Race {
  public readonly raceModel = input.required<RaceModel>();
}

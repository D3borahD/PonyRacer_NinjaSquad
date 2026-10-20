import { Component, inject } from '@angular/core';
import { Race } from '../race/race';
import { RaceService } from '../race-service';

@Component({
  selector: 'pr-races',
  imports: [Race],
  templateUrl: './races.html',
  standalone: true,
  styleUrl: './races.css'
})
export class Races {
  private readonly racesService: RaceService = inject(RaceService);

  protected readonly races = this.racesService.list();
}

import { BootstrapOptions, Component } from '@angular/core';
import { Class } from './model/class';
import { Encounter } from './model/encounter';
import { Role } from './model/role';
import { Roster } from './model/roster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public TEMP_boss: Encounter = { name: 'Sire Denathrius', healcount: 4 };
  public TEMP_roster: Roster = {
    players: [
      { name: 'Markus', class: Class.PRIEST, rating: 3, role: Role.RAIDER },
      {
        name: 'Gospipriest',
        class: Class.PRIEST,
        rating: 2,
        role: Role.RAIDER,
      },
      { name: 'Aryll', class: Class.SHAMAN, rating: 1, role: Role.RAIDER },
    ],
  };
  title = 'wowautosetup';
}

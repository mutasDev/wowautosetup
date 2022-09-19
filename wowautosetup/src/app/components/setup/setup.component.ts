import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BootstrapOptions, Component, Input, OnInit } from '@angular/core';
import { Encounter } from 'src/app/model/encounter';
import { Player } from 'src/app/model/player';
import { Roster } from 'src/app/model/roster';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  @Input()
  public boss!: Encounter;

  @Input()
  public roster!: Roster;

  constructor() { }

  ngOnInit(): void {
  }

  setup: Player[] = [];

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

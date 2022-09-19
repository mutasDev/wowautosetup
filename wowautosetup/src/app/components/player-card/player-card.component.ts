import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  player!: Player;

  constructor() { }

  ngOnInit(): void {
  }

}

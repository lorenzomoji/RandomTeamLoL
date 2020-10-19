import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/app/models/champion/champion';

import championsLol from 'src/assets/champions.json';

@Component({
  selector: 'app-random-team',
  templateUrl: './random-team.component.html',
  styleUrls: ['./random-team.component.css']
})
export class RandomTeamComponent implements OnInit {

  @Input() randomTeam: number[];
  @Input() champions: Champion[];

  constructor() { }

  ngOnInit() {
  }

}

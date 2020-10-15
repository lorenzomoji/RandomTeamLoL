import { Component } from '@angular/core';
import { Champion } from './models/champion/champion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomLolChampion';
  team: number[] = [];
  champions: Champion[] = [];

  procesarPropagar(event) {
    this.team = event;
  }

  procesarPropagarChamps(event) {
    this.champions = event;
  }

}

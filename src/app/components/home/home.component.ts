import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Champion } from 'src/app/models/champion/champion';

import championsLol from 'src/assets/champions.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() propagar = new EventEmitter<number[]>();
  @Output() propagarChamps = new EventEmitter<Champion[]>();

  champions: Champion[] = championsLol;
  championsBan: Champion[] = [];
  filterChampions = '';
  ultimoRandom: number = 0;

  constructor() {
    this.champions = championsLol;
  }

  ngOnInit() {
  }

  banPersonaje(campeon: any) {
    if (this.championsBan.length < 10) {
      this.championsBan.push(campeon);
      this.champions = this.champions.filter(champion => champion.name !== campeon.name);
    }
  }

  generarTeam() {
    let team = [this.calcularRandom(), this.calcularRandom(), this.calcularRandom(), this.calcularRandom(), this.calcularRandom()];
    this.propagar.emit(team);
    this.propagarChamps.emit(this.champions);
  }

  calcularRandom() {
    let maximo = 151;
    const minimo = 1;
    const numeroPosibilidades = maximo - minimo;
    var aleatorio = Math.random() * (numeroPosibilidades);
    aleatorio = Math.floor(aleatorio + minimo);
    if (this.ultimoRandom !== aleatorio) {
      this.ultimoRandom = aleatorio;
      return aleatorio;
    } else {
      this.ultimoRandom = aleatorio;
    }
  }

}

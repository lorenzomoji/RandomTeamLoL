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

  constructor() {
    this.champions = championsLol;
  }

  ngOnInit() {
  }

  banPersonaje(indice: number) {
    if (this.championsBan.length < 10) {
      this.championsBan.push(this.champions[indice])
      this.champions = this.champions.filter(champion => champion.name != this.champions[indice].name);
    }
  }

  generarTeam() {
    var team = [this.calcularRandom(), this.calcularRandom(), this.calcularRandom(), this.calcularRandom(), this.calcularRandom()];
    this.propagar.emit(team);
    this.propagarChamps.emit(this.champions);
  }

  calcularRandom() {
    const maximo = 151;
    const minimo = 1;
    const numeroPosibilidades = maximo - minimo;
    var aleatorio = Math.random() * (numeroPosibilidades);
    aleatorio = Math.floor(aleatorio);
    return aleatorio + minimo;
  }

}

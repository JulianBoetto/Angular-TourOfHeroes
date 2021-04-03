import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //generamos un archivo (mock-heroes) que simula un JSON

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // creamos un controlador de evento

  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  heroes = HEROES; //recibimos los datos del archivo mock-heroes.ts
  
  constructor() { }

  ngOnInit(): void {
  }

}

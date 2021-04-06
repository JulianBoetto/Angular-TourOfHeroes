import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';// importamos el servicio
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] | undefined; //modificamos la propiedad, abajo queda la anterior
  // heroes = HEROES; //recibimos los datos del archivo mock-heroes.ts
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes(); //agregamos la llamada
  }

}

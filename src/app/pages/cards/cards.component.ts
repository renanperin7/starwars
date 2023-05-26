import { Component } from '@angular/core';
import { Card } from 'src/app/card';
import { CardsService } from '../cards.service';
import { World } from 'src/app/world';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  card!: Card

  world!: World;

  id: number = 1

  constructor(private service: CardsService) {}

  ngOnInit() {
    this.refresh()
  }

  gerarNumeroAleatorio(min: number, max: number) {
    const random = Math.random();
    const numeroAleatorio = Math.floor(random * (max - min + 1)) + min;
    
    return numeroAleatorio;
  }

  refresh() {
    this.service.getPeople(this.id).subscribe((cards) => {
      this.card = cards
    })

    this.service.getPlanet(this.id).subscribe((worlds) => {
      this.world = worlds
    })
  }
  
}

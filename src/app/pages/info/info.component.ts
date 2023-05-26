import { Component } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  informacoesCarregadas: boolean = false;

  characters:  any  = '';
  planets:  any  = '';
  spaceships:  any  = '';
  vehicles:  any  = '';
  films:  any  = '';

  card!: string
  id: number = 1
  // names: string[] = []

  constructor(private service: CardsService) {}

  ngOnInit() {

  }

  loadInfo(botao: string) {

    if (botao === 'character') {

      const names: string[] = [];

      const fetchPeople = (url: string | null) => {
        if (url) {
          const pageNumber = url.split('=')[1];
      
          this.service.getNextPeople(pageNumber).subscribe((card: any) => {
            const pageNames = card.results.map((person: any) => person.name);
            names.push(...pageNames);
            const nextUrl = card.next;
            fetchPeople(nextUrl); // Chamar a função novamente com a próxima URL
          });
        } else {
          this.characters = names;
        }
      };
      
      this.service.getAllPeople().subscribe((card: any) => {
        const firstPageNames = card.results.map((person: any) => person.name);
        names.push(...firstPageNames);
        const nextPageUrl = card.next;
        fetchPeople(nextPageUrl); // Iniciar a recursão com a próxima URL
      });

    } else if (botao === 'planets') {

      const planets: string[] = [];

      const fetchPeople = (url: string | null) => {
        if (url) {
          const pageNumber = url.split('=')[1];
      
          this.service.getNextPlanet(pageNumber).subscribe((card: any) => {
            const pagePlanets = card.results.map((planets: any) => planets.name);
            planets.push(...pagePlanets);
            const nextUrl = card.next;
            fetchPeople(nextUrl); // Chamar a função novamente com a próxima URL
          });
        } else {
          this.planets = planets;
        }
      };
      
      this.service.getAllPlanet().subscribe((card: any) => {
        const firstPagePlanets = card.results.map((planets: any) => planets.name);
        planets.push(...firstPagePlanets);
        const nextPageUrl = card.next;
        fetchPeople(nextPageUrl); // Iniciar a recursão com a próxima URL
      });

    } else if (botao === 'spaceships') {

      const spaceships: string[] = [];

      const fetchPeople = (url: string | null) => {
        if (url) {
          const pageNumber = url.split('=')[1];
      
          this.service.getNextSpaceships(pageNumber).subscribe((card: any) => {
            const pageSpaceships = card.results.map((spaceships: any) => spaceships.name);
            spaceships.push(...pageSpaceships);
            const nextUrl = card.next;
            fetchPeople(nextUrl); // Chamar a função novamente com a próxima URL
          });
        } else {
          this.spaceships = spaceships;
        }
      };

      this.service.getAllSpaceships().subscribe((card: any) => {
        const firstPageSpaceships = card.results.map((spaceships: any) => spaceships.name);
        spaceships.push(...firstPageSpaceships);
        const nextPageUrl = card.next;
        fetchPeople(nextPageUrl); // Iniciar a recursão com a próxima URL
      });

    } else if (botao === 'vehicles') {

      const vehicles: string[] = [];

      const fetchPeople = (url: string | null) => {
        if (url) {
          const pageNumber = url.split('=')[1];
      
          this.service.getNextVehicles(pageNumber).subscribe((card: any) => {
            const pageVehicles = card.results.map((vehicles: any) => vehicles.name);
            vehicles.push(...pageVehicles);
            const nextUrl = card.next;
            fetchPeople(nextUrl); // Chamar a função novamente com a próxima URL
          });
        } else {
          this.vehicles = vehicles;
        }
      };

      this.service.getAllVehicles().subscribe((card: any) => {
        const firstPageVehicles = card.results.map((vehicles: any) => vehicles.name);
        vehicles.push(...firstPageVehicles);
        const nextPageUrl = card.next;
        fetchPeople(nextPageUrl); // Iniciar a recursão com a próxima URL
      });

    } else if (botao === 'films') {

      this.service.getAllFilms().subscribe((films: any) => {
        const film = films.results.map((films: any) => films.title);

        this.films = film;
      });

    }

    this.informacoesCarregadas = true;
  }

}

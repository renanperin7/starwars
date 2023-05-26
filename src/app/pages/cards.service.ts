import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../card';
import { World } from '../world';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly API = 'https://swapi.dev/api/'

  constructor(private http: HttpClient) { }

  getPeople(id: number) {
    return  this.http.get<Card>(`${this.API}people/${id}`)
  }

  getAllPeople() {
    return  this.http.get(`${this.API}people/`)
  }

  getNextPeople(id: any) {
    return  this.http.get(`${this.API}people/?page=${id}`)
  }

  getPlanet(id: number) {
    return  this.http.get<World>(`${this.API}planets/${id}`)
  }

  getAllPlanet() {
    return  this.http.get(`${this.API}planets/`)
  }

  getNextPlanet(id: any) {
    return  this.http.get(`${this.API}planets/?page=${id}`)
  }

  getSpaceships(id: number) {
    return  this.http.get(`${this.API}starships/${id}`)
  }

  getAllSpaceships() {
    return  this.http.get(`${this.API}starships/`)
  }

  getNextSpaceships(id: any) {
    return  this.http.get(`${this.API}starships/?page=${id}`)
  }

  getVehicles(id: number) {
    return  this.http.get(`${this.API}vehicles/${id}`)
  }

  getAllVehicles() {
    return  this.http.get(`${this.API}vehicles/`)
  }

  getNextVehicles(id: any) {
    return  this.http.get(`${this.API}vehicles/?page=${id}`)
  }

  getFilms(id: number) {
    return  this.http.get(`${this.API}films/${id}`)
  }

  getAllFilms() {
    return  this.http.get(`${this.API}films/`)
  }
}

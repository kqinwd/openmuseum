import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Museum } from 'src/app/models/museum/museum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchMuseums(): Observable<Museum[]> { // On type l'observable avec le type Museum[] défini dans model/museum/museum.ts
    let obsMuseums: Observable<Museum[]> = this.httpClient.get<Museum[]>("http://localhost:3000/museums") // On envoie la requête à l'API
    return obsMuseums;
  }

  // Méthode servant à faire une requête HTTP récupérant un seul pilote grâce à son id
  public fetchMuseumById(id: string): Observable<Museum> {
    let obsSingleMuseum: Observable<Museum> = this.httpClient.get<Museum>("http://localhost:3000/museums/" + id)
    return obsSingleMuseum;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Museum } from 'src/app/models/museum/museum';

@Component({
  selector: 'app-index',
  templateUrl: './museums-list.component.html',
  styleUrls: ['./museums-list.component.css']
})

export class IndexComponent implements OnInit {

  public museums: Museum[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.fetchMuseums()
      .subscribe( // On souscrit à l'observable
        res => {
          console.log(res); // On affiche en console la réponse
          this.museums = res; // On affecte la réponse à la variable museums
        },
        error => {
          console.log(error) // Si erreur, on affiche en console l'erreur

        }
      );
  }

}

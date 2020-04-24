import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../services/openmuseum.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumRef: string;
  museumTitle: string;
  opening: string;
  adress: string;
  city: string;
  zip: string;
  telephone: string;
  website: string;
  fax: string;
  museumLocation: number[];

  constructor(private museumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['reference'];
    this.museumTitle = this.museumService.getMuseumByRef(museumRef).name;
    this.opening = this.museumService.getMuseumByRef(museumRef).opening;
    this.adress = this.museumService.getMuseumByRef(museumRef).adress;
    this.zip = this.museumService.getMuseumByRef(museumRef).zip;
    this.city = this.museumService.getMuseumByRef(museumRef).city;
    this.fax = this.museumService.getMuseumByRef(museumRef).fax;
    this.telephone = this.museumService.getMuseumByRef(museumRef).telephone;
    this.website = this.museumService.getMuseumByRef(museumRef).website;
    this.museumLocation = this.museumService.getMuseumByRef(museumRef).cardinals;

  }

}

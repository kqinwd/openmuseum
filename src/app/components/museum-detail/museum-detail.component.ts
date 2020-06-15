import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Museum } from '../../models/museum/museum';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})

export class MuseumDetailComponent implements OnInit {

  museum: Museum;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumId = this.route.snapshot.params['museumId'];

    this.dataService.fetchMuseumById(museumId)
      .subscribe(
        res => {
          this.museum = res;
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}
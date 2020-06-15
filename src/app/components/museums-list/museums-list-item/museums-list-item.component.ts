import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { Museum } from '../../../models/museum/museum';

@Component({
  selector: 'app-single-museum',
  templateUrl: './museums-list-item.component.html',
  styleUrls: ['./museums-list-item.component.css']
})

export class SingleMuseumComponent implements OnInit {

  @Input() museum: Museum;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}

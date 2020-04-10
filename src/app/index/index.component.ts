import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../services/openmuseum.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'openmuseum';
  museums: any[]
  
  ngOnInit() {

    this.museums = this.museumService.museums;
  }

  constructor(private museumService: MuseumService) { }

}

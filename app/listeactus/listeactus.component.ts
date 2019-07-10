import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';

@Component({
  selector: 'app-listeactus',
  templateUrl: './listeactus.component.html',
  styleUrls: ['./listeactus.component.css']
})
export class ListeactusComponent implements OnInit {


  constructor(public actus:ActuService) { }

  ngOnInit() {
  }

}

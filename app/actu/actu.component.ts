import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';
import { ActivatedRoute } from '@angular/router';
import { IdentService } from '../services/ident.service';
@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {
  id:number;
  constructor(public actus:ActuService ,public ident:IdentService,private routeParam:ActivatedRoute) { }

  ngOnInit() {
    this.routeParam.params.subscribe(params => {
      this.id= +params['id'];
    });
  }

}

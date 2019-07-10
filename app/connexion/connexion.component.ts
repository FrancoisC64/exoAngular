import { Component, OnInit } from '@angular/core';
import { Conne } from '../modele/conne';
import { IdentService } from '../services/ident.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  conne:Conne;
  constructor(public ident:IdentService,private router:Router) { }


  ngOnInit() {
    this.conne={
      id:'',
      mdp:''
    };
  }

  envoiConne() {
    if(this.ident.validateConnexion(this.conne))this.router.navigate(['/']);
  }

  onClickLogOut(){
    this.ident.logOut();
    this.router.navigate(['/']);
  }
}

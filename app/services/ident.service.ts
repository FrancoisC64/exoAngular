import { Injectable } from '@angular/core';
import { Conne } from '../modele/conne';

@Injectable({
  providedIn: 'root'
})
export class IdentService {
  cred:Conne;
  connected:boolean;
  constructor() {
    this.cred={id:'test',mdp:'test'};
    this.connected=false;
  }
  validateConnexion(conne:Conne):boolean{
    if(conne.id===this.cred.id&&conne.mdp===this.cred.mdp){
      this.connected=true;
      return true;
    }else return false;
  }
  logOut(){
    this.connected=false;
  }
}

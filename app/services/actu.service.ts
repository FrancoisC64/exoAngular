import { Injectable } from '@angular/core';
import { Actu } from '../modele/actu';
@Injectable({
  providedIn: 'root'
})
export class ActuService {

  listActu:Array<Actu>;
  constructor() {
    this.listActu=[{
   actuTitle:'title',
   actuContent:'Some contents .... Voila !',
   actuImg:'assets/logo.png',
   actuAlias:'alias',
   actuAuteur:'auteur',
   actuDate:new Date()
  },{
   actuTitle:'actu2',
   actuContent:'Some contents .... Voila !',
   actuImg:'assets/logo.png',
   actuAlias:'alias',
   actuAuteur:'auteur',
   actuDate:new Date()
  }];
  }
}

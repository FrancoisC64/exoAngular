import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, UrlSegment, Router, Route, UrlTree, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentService } from './ident.service';
@Injectable({
  providedIn: 'root'
})
export class EditionGuardGuard implements CanLoad, CanActivate {
 
  constructor(private route:Router, private connexion:IdentService){}
  canLoad(
    route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(this.connexion.connected){
        return true;
      }
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.connexion.connected){
        return true;
      }
  }


}

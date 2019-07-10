import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeactusComponent } from './listeactus/listeactus.component';
import { ContactComponent } from './contact/contact.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionGuardGuard } from './services/edition-guard.guard';
const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'actualites',
    component:ListeactusComponent
  },
  {
    path:'actualite/:id',
    component:ActuComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'admin',
    loadChildren:'./admin/admin.module#AdminModule'
  },
  {
    path:'edition',
    loadChildren:'./admin/edition/edition.module#EditionModule',
    canLoad:[EditionGuardGuard],
    canActivate:[EditionGuardGuard]
  },
  {
    path:'edition/:id',
    loadChildren:'./admin/edition/edition.module#EditionModule',
    canLoad:[EditionGuardGuard],
    canActivate:[EditionGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

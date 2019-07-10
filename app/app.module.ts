import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeactusComponent } from './listeactus/listeactus.component';
import { ContactComponent } from './contact/contact.component';
import { ActuComponent } from './actu/actu.component';
import { ActuService} from './services/actu.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { IdentService } from './services/ident.service';
import { EditionGuardGuard } from './services/edition-guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    ListeactusComponent,
    ContactComponent,
    ActuComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ActuService,IdentService,EditionGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

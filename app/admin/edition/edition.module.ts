import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditionRoutingModule } from './edition-routing.module';
import { HomeEditionComponent } from './home-edition.component';
import { ActuService } from '../../services/actu.service';
@NgModule({
  declarations: [HomeEditionComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditionRoutingModule
  ]
})
export class EditionModule { }

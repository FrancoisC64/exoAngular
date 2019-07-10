import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEditionComponent } from './home-edition.component';
const routes: Routes = [
  {
    path:'',
    component:HomeEditionComponent
  },
  {
    path:':id',
    component:HomeEditionComponent
  }
];
@NgModule({
  imports: [
   RouterModule.forChild(routes) 
  ],
  exports:[RouterModule]
})
export class EditionRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { SininComponent } from './sinin/sinin.component';
import { SinupComponent } from './sinup/sinup.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"map",component:MapComponent},
  {path:"sinin",component:SininComponent},
  {path:"sinup",component:SinupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

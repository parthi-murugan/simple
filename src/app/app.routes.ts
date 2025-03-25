import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ServicesComponent } from './nav/services/services.component';
import { ContactsComponent } from './nav/contacts/contacts.component';
import { LoginComponent } from './nav/login/login.component';


export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

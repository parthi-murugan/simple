import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ServicesComponent } from './nav/services/services.component';
import { ContactFormComponent } from './nav/contacts/contacts.component';
import { LoginComponent } from './nav/login/login.component';
import { ProdectComponent } from './nav/prodects/prodects.component';



export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contacts',component:ContactFormComponent},
  {path:'login',component:LoginComponent},
  {path:'prodects',component:ProdectComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

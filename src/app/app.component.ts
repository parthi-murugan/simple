import { Component,NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';





import { CounterComponent } from './counter/counter.component';

import { BodyComponent } from './body/body.component';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, BodyComponent, RouterModule,  NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simple';


}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';



import { CounterComponent } from './counter/counter.component';
import { counterService } from './counter/service/counter.service';
import { ExaComponent } from './counter/exa/exa.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simple';
 

}

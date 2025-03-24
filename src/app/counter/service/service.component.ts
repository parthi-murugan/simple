import { Component } from '@angular/core';
import { CounterComponent } from '../counter.component';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})

export class ServiceComponent {

}

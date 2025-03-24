import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

import { CounterComponent } from './counter/counter.component';
import { counterService } from './counter/service/counter.service';
import { ExaComponent } from './counter/exa/exa.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simple';
  data: any[] = [];

  //observable
  myObservable = new Observable((observer) => {
    setTimeout(() =>{observer.next(1)},1000)
    setTimeout(() =>{observer.next(2)},2000)
    setTimeout(() =>{observer.next(3)},3000)
    setTimeout(() =>{observer.next(4)},4000)
    setTimeout(() =>{observer.next(5)},5000)
    setTimeout(() =>{observer.next(6)},6000)
    
    
  });
  getArraydata() {
    //observor
    this.myObservable.subscribe((val: any) => {
      this.data.push(val);
    });
  }
}

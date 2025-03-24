import { Component,Input ,NgModule} from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule, NgFor } from '@angular/common';

import { counterService } from './service/counter.service';
import { ExaComponent } from './exa/exa.component';
import { Main } from './models/user.model';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-counter',
  standalone: true,
  providers: [counterService],
  imports: [CommonModule, ExaComponent, NavComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  Sam = 'test';
  summa: any[] = [0,1,2,3,4,5];
  count = 0;
  incre() {
    this.count++;
  }
  decr() {
    
    this.count--;
  }
  constructor(private counterService: counterService) {}
  OnCounter() {
    this.counterService.mela('this.count');
  }
  OnSubmit() {
    this.counterService.name('this.name');
  }
  isVisible = true;
  main:Main = {
    name : 'Parthiban',
    age : 21  
   
  };
  // buttonStyles = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   padding: '10px 20px',
  //   background: 'blue',
  //   color: 'white',
  //   border: 'none',
  //   cursor: 'pointer',
  // };
  
}


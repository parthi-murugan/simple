import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { counterService } from '../service/counter.service';
import { Main } from '../models/user.model';
@Component({
  selector: 'app-exa',
  standalone: true,
  imports: [CommonModule],
  providers: [counterService],
  templateUrl: './exa.component.html',
  styleUrl: './exa.component.css'
})
export class ExaComponent  {
  @Input() name = 'test1';
  @Input() main: Main | undefined;

  constructor(private counterService: counterService) {}
  onClick1() {
    this.counterService.me('HI'); 
  }
  myFunction() {
    console.log('Hello');
}
}

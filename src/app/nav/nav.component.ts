import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodect.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProdectComponent {
  @Input() selectedCategory: string = '';
  @Input() selectedProducts: any[] = [];
}

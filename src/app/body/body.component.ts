import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdectComponent } from './prodect/prodect.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ProdectComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data: any[] = ['Shoes', 'Cloths', 'Mobile Phones']; // Initialize your data array
  selectedCategory: string = ''; // Define selectedCategory property
  selectedProducts: any[] = []; // Define selectedProducts property
  productsLoaded = false; // Define productsLoaded property

  constructor() {}

  getArraydata() {
    this.productsLoaded = true; // Set productsLoaded to true when data is loaded
  }

  showProduct(category: string) {
    this.selectedCategory = category;
    if (category === 'Shoes') {
      this.selectedProducts = [
        { name: 'Nike Air', image: 'assets/Nike.jpeg', price: '$100', description: 'Comfortable running shoes' },
        { name: 'Adidas UltraBoost', image: 'assets/Adidas.jpeg', price: '$120', description: 'High-performance shoes' },
        { name: 'Puma Classic', image: 'assets/Puma.jpg', price: '$90', description: 'Stylish casual shoes' }
      ];
    } else if (category === 'Cloths') {
      this.selectedProducts = [
        { name: 'T-Shirt', image: 'assets/T-shirt.jpg', price: '$20', description: 'Cotton T-shirt' },
        { name: 'Jeans', image: 'assets/Jeans.jpeg', price: '$40', description: 'Denim jeans' },
        { name: 'Jacket', image: 'assets/jackets.jpg', price: '$60', description: 'Warm winter jacket' }
      ];
    } else if (category === 'Mobile Phones') {
      this.selectedProducts = [
        { name: 'iPhone 12', image: 'assets/12.jpeg', price: '$799', description: 'Latest Apple iPhone' },
        { name: 'Samsung Galaxy S21', image: 'assets/S21.jpeg', price: '$699', description: 'High-end Samsung phone' },
        { name: 'OnePlus 9', image: 'assets/9.jpeg', price: '$729', description: 'Flagship OnePlus phone' }
      ];
    } else {
      this.selectedProducts = [];
    }
  }
}
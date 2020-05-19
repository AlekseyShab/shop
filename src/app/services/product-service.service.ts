import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { Category } from '../components/first-component/first-component.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Sport Bike',
      description: 'This is sport bike',
      price: 200,
      category: Category.Sport,
      isAvailable: true
    },
    {
      id: 2,
      name: 'BMX Bike',
      description: 'This is bmx bike',
      price: 250,
      category: Category.BMX,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Mountain Bike',
      description: 'This is mountain bike',
      price: 400,
      category: Category.Mountain,
      isAvailable: false
    }
  ];

  constructor() { }

  get allProducts(): Product[] {
    return this.products;
  }
}

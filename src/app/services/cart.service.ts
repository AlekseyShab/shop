import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { Category } from '../components/first-component/first-component.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  chosenProduct: Product[] = [
    {
      name: 'Comfort Bike',
      description: 'This is bike for comfortable ride',
      price: 300,
      category: Category.Comfort,
      isAvailable: true
    },
    {
      name: 'Sport Bike',
      description: 'This is sport bike',
      price: 500,
      category: Category.Sport,
      isAvailable: true
    },
  ];
  constructor() { }

  get listChosenProduct(): Product[] {
    return this.chosenProduct;
  }
}

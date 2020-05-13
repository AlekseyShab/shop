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
      description: 'This is sport bike',
      price: 500,
      category: Category.Comfort,
      isAvailable: true,
      amount: 1
    },
  ];
  constructor() { }

  get listChosenProduct(): Product[] {
    return this.chosenProduct;
  }
}

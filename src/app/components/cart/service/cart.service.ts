import { Injectable } from '@angular/core';

import { Product } from '../../product/model/product.model';
import { Category } from '../../first-component/first-component.component';

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
      isAvailable: true
    },
  ];
  constructor() { }

  get listChosenProduct(): Product[] {
    return this.chosenProduct;
  }
}

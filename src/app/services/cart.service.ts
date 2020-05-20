import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsSubject = new Subject<Product[]>();


  private chosenProduct: Product[] = [];

  constructor() {
    this.productsSubject.next(this.chosenProduct);
  }

  private updateProducts() {
    this.productsSubject.next(this.chosenProduct);
  }

  addItem(newProduct: Product) {
    this.chosenProduct.push(newProduct);
    this.updateProducts();
  }

  getTotalCost(): number {
    return this.chosenProduct.map(product => product.price).reduce((total, price) => total + price, 0);
  }

  getTotalProductInCart(): number {
    return this.chosenProduct.length;
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../../first-component/first-component.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      name: 'Sport Bike',
      description: 'This is sport bike',
      price: 200,
      category: Category.Sport,
      isAvailable: true
    },
    {
      name: 'BMX Bike',
      description: 'This is bmx bike',
      price: 250,
      category: Category.BMX,
      isAvailable: true
    },
    {
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

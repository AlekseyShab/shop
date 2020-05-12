import { Component, OnInit } from '@angular/core';

import { Product } from '../product/model/product.model';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productInCart: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productInCart = this.cartService.listChosenProduct;
  }

}

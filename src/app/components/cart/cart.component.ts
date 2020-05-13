import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productInCart: Product[];
  itemsInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productInCart = this.cartService.listChosenProduct;
    this.itemsInCart = this.productInCart.length;
  }

}

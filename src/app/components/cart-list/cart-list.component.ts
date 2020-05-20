import { Component, OnDestroy, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

const COLOR = '#7bdddc';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  private products$: Subscription;

  productInCart: Product[];

  COLOR = COLOR;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products$ = this.cartService.productsSubject.subscribe(products => {
      this.productInCart = products;
    });
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }

  getTotalSum(){
    return this.cartService.getTotalCost();
  }

  getProductInCart(){
    return this.cartService.getTotalProductInCart();
  }

}

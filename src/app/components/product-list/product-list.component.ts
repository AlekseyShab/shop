import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product-service.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.allProducts;
  }

  onBuy(product: Product) {
    this.cartService.addItem(product);
  }

}

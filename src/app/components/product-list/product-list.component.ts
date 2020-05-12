import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product/services/product-service.service';
import { Product } from '../product/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.allProducts;
  }

}

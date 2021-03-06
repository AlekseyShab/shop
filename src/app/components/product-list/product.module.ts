import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{

  onBuy() {
    console.log('Product have been chosen');
  }
}
// На мой взгляд немного не логична структура.
// Эткрываешь папку components, а там оказывается не только компоненты, но и модели и сервисы.

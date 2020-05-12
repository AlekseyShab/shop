import { Component } from '@angular/core';

export enum Category {
  Sport = 'Sport',
  Freeroad = 'Freeroad',
  BMX = 'BMX',
  Comfort = 'Comfort',
  Mountain = 'Mountain'
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponent {
  name = 'Bike Electra';
  description = 'The Best bike in the world';
  price = 200;
  category: Category = Category.BMX;
  isAvailable: boolean;
}

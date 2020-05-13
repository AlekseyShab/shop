import { Category } from '../components/first-component/first-component.component';

export interface Product {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

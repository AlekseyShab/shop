import { Category } from '../components/first-component/first-component.component';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

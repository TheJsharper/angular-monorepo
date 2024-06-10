import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import {TableModule} from 'primeng/table'
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
@Component({
  selector: 'lib-primeng-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  providers:[ProductService],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.scss',
})
export class PrimengTableComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProducts().then((data) => {
          this.products = data;
      });
  }
}

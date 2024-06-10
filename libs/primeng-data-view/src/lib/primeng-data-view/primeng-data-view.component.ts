import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule,DataViewLayoutOptions } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProductService } from './services/product.service';
import { PaginatorModule } from 'primeng/paginator';

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
  selector: 'lib-primeng-data-view',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule,ButtonModule,PaginatorModule   ],
  providers:[ProductService],
  templateUrl: './primeng-data-view.component.html',
  styleUrl: './primeng-data-view.component.scss',
})
export class PrimengDataViewComponent {
  layout: 'grid' | 'list' = 'list'

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
  }

  getSeverity(product: Product) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return undefined;
      }
  };
}

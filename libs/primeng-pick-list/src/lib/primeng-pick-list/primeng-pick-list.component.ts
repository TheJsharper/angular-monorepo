import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
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
  selector: 'lib-primeng-pick-list',
  standalone: true,
  imports: [CommonModule, PickListModule, DragDropModule],
  providers: [ProductService],
  templateUrl: './primeng-pick-list.component.html',
  styleUrl: './primeng-pick-list.component.scss',
})
export class PrimengPickListComponent {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.carService.getProducts().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
    });
    this.targetProducts = [];
  }
}

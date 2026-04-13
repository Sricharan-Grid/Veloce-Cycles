import { Component, computed, signal } from '@angular/core';

import { PopupComponent } from '../popup-component/popup-component';
import { ProductsInterface } from '../interfaces';
import { DataService } from '../service/data.service';
import { HelperService } from '../service/helper.service';
import { ProductPopupService } from '../service/productPopup.service';

@Component({
  selector: 'app-products-component',
  imports: [PopupComponent],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent {
  products = signal<ProductsInterface[]>([]);

  ngOnInit() {
    this.loadAllBikes();
  }

  constructor(
    private dataService: DataService,
    private helperService: HelperService,
    public productPopupService: ProductPopupService,
  ) {}
  // Load All Bikes

  loadAllBikes() {
    this.dataService.getAllProducts()?.subscribe({
      next: (res) => {
        if (res && res.length) this?.products?.set(res[0]);
      },

      error: (err) => this?.helperService?.errorHandler(err, 'loadAllBikes()'),
    });
  }

  fetchedProducts = computed(() => {
    return this.products();
  });

  popupStatus = computed(() => {
    return this.productPopupService?.isPopupClose();
  });
}

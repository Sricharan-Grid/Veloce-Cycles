import { Component, computed, signal } from '@angular/core';
import { DataService } from '../service/data.service';
import { HelperService } from '../service/helper.service';
import { ProductPopupService } from '../service/productPopup.service';
import { ToastService } from '../service/toast.service';
import { WishlistItemInterface } from '../interfaces';

@Component({
  selector: 'app-wishlist-component',
  imports: [],
  templateUrl: './wishlist-component.html',
  styleUrl: './wishlist-component.scss',
})
export class WishlistComponent {
  constructor(
    public dataService: DataService,
    private helperService: HelperService,
    public productPopupService: ProductPopupService,
    private toastService: ToastService,
  ) {}
  wishlistProducts = signal<WishlistItemInterface[]>([]);

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    console.log('inside Woishlist');
    this.dataService.getWishlist()?.subscribe({
      next: (res) => {
        if (res && res.length) this?.wishlistProducts?.set(res[0]);
      },

      error: (err) => this?.helperService?.errorHandler(err, 'getAllProducts()'),
    });
  }

  addWishlist(productId: number) {
    this.dataService.addWishlist(productId)?.subscribe({
      next: (res) => {
        if (res)
          this?.toastService.triggerToast(
            'success',
            'Added Successfully',
            'Product Added Successfully to Wishlist',
          );
      },

      error: (err) => this?.helperService?.errorHandler(err, 'addWishlist()'),
    });
  }

  removeWishlist(productId: number) {
    this.dataService.removeWishlist(productId)?.subscribe({
      next: (res) => {
        console.log(res, 'rsa');
        if (res)
          this?.toastService.triggerToast(
            'success',
            'Removed Successfully',
            'Product Removed Successfully to Wishlist',
          );

        this.getAllProducts();
      },

      error: (err) => this?.helperService?.errorHandler(err, 'addWishlist()'),
    });
  }

  fetchedProducts = computed(() => {
    console.log('Wishlist products', this.wishlistProducts());
    return this.wishlistProducts();
  });

  popupStatus = computed(() => {
    return this.productPopupService?.enableWishList();
  });
}

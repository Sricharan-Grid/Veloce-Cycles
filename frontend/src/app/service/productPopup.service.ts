import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductPopupService {
  isPopupClose = signal<boolean>(false);
  productId = signal<number>(1);
  isImagePopupOpen = signal<boolean>(false);
  imagePopupPath = signal<string>('');
  wishListPopup = signal<boolean>(false);

  enablePopup(id: number) {
    this.productId.set(id);
    this.isPopupClose.set(true);
  }

  disablePopup() {
    this.isPopupClose.set(false);
    this.isImagePopupOpen.set(false);
    this.imagePopupPath.set('');
  }

  enableImagePopup(id: number) {
    this.isImagePopupOpen.set(true);
  }

  enableWishList() {
    this.wishListPopup.set(true);
  }

  disableWishList() {
    this.wishListPopup.set(false);
  }
}

import { Component, computed, signal } from '@angular/core';
import { ProductPopupService } from '../service/productPopup.service';

@Component({
  selector: 'app-banner-component',
  imports: [],
  templateUrl: './banner-component.html',
  styleUrl: './banner-component.scss',
})
export class BannerComponent {
  bgCount = signal<number>(1); //Count of the Bg to Switch
  private timerId: any;

  ngOnInit() {
    this.timerId = setTimeout(() => {
      this.bgSwitcher();
    }, 4000);
  }

  constructor(private productPopupService: ProductPopupService) {}

  bgClassName = computed(() => {
    let count = this.bgCount();
    return `banner__bg${count}`;
  });

  bgSwitcher() {
    this.timerId = setTimeout(() => {
      this.bgSwitcher();
    }, 4000);

    if (this.bgCount() < 3) {
      let cnt = this.bgCount();
      cnt++;
      this.bgCount.set(cnt);
    } else {
      this.bgCount.set(1);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  popupStatus = computed(() => {
    return this.productPopupService?.isPopupClose();
  });
}

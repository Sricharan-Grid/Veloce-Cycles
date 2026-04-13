import { Component, computed } from '@angular/core';
import { BannerComponent } from '../banner-component/banner-component';
import { FooterComponent } from '../footer-component/footer-component';
import { AboutComponent } from '../about-component/about-component';
import { ToastComponent } from '../toast-component/toast-component';
import { FeedbackComponent } from '../feedback-component/feedback-component';
import { ProductPopupService } from '../service/productPopup.service';
import { ToastService } from '../service/toast.service';
import { VideoTestimonialsComponent } from '../video-testimonials-component/video-testimonials-component';
import { PopupComponent } from '../popup-component/popup-component';
import { ProductsComponent } from '../products-component/products-component';

@Component({
  selector: 'app-home-component',
  imports: [
    BannerComponent,
    ProductsComponent,
    AboutComponent,
    ToastComponent,
    PopupComponent,
    VideoTestimonialsComponent,
    FeedbackComponent,
    FooterComponent,
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  constructor(
    public productPopupService: ProductPopupService,
    private toastService: ToastService,
  ) {}

  popupStatus = computed(() => {
    return this.productPopupService?.isPopupClose();
  });

  imagePopupStatus = computed(() => {
    return this.productPopupService?.isImagePopupOpen();
  });

  imagePopupPath = computed(() => {
    return this.productPopupService?.imagePopupPath();
  });

  toastChange = computed(() => {
    return this.toastService.showToast();
  });
}

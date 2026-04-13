import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header-component/header-component';
import { BannerComponent } from './banner-component/banner-component';
import { FooterComponent } from './footer-component/footer-component';
import { HomeComponent } from './home-component/home-component';
import { ToastComponent } from './toast-component/toast-component';
import { ToastService } from './service/toast.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    ToastComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');

  constructor(private toastService: ToastService) {}

  toastChange = computed(() => {
    console.log(this.toastService.showToast(), 'From home');
    return this.toastService.showToast();
  });
}

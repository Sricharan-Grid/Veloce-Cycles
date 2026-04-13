import { Component, computed } from '@angular/core';
import { ToastService } from '../service/toast.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toast-component',
  imports: [],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.scss',
})
export class ToastComponent {
  constructor(
    private toastService: ToastService,
    private sanitizer: DomSanitizer,
  ) {}

  headLineChanged = computed(() => {
    return this.toastService.toastHeadline();
  });
  messageChanged = computed(() => {
    return this.toastService.toastMessage();
  });

  iconChanged = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.toastService.toastIcontoRender());
  });

  isToastClosed = computed(() => {
    return this.toastService.isClosing();
  });
}

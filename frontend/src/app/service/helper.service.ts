import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class HelperService {
  //Debug log
  debugLog: boolean = true;

  //base URL
  baseURL : string = 'http://localhost:3000'

  constructor(private toastService: ToastService) {}
  //   Error handling Function
  errorHandler(err: any, moduleOfOccurance: string) {
    if (err?.status && err?.status === 404) {
      this.toastService.triggerToast(
        'failed',
        `Oops! Something slipped.`,
        'Nothing to see here… Its a 404.',
      );
    } else if (err?.status && err?.status === '500') {
      this.toastService.triggerToast(
        'failed',
        `Oops! Something slipped.`,
        'Our engines stalled for a moment. Try again.',
      );
    } else {
      this.toastService.triggerToast(
        'failed',
        `Oops! Something slipped.`,
        'We ran into a minor hiccup. Please try again!',
      );
    }

    console.error({
      status: err.status,
      message: err.message,
      error: err,
      Module: moduleOfOccurance,
    });
  }
}

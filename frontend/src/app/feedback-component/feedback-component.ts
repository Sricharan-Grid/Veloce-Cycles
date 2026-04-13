import { Component, computed, signal } from '@angular/core';
import { DataService } from '../service/data.service';
import { HelperService } from '../service/helper.service';
import { TestimonialInterface } from '../interfaces';


@Component({
  selector: 'app-feedback-component',
  imports: [],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.scss',
})
export class FeedbackComponent {
  constructor(
    private dataService: DataService,
    private helperService: HelperService,
  ) {}

  reviewTestimonials = signal<TestimonialInterface[]>([]);
  reviewCount = signal<number>(0);
  private feedbackTimerId: any;

  ngOnInit() {
    this.loadTestimonioals();
  }

  loadTestimonioals() {
    this.dataService.getAllTestimonials()?.subscribe({
      next: (res) => {
        if (res && res.length) {
          this?.reviewTestimonials?.set(res[0]);
          this.feedbackSwitcher();
        }
        console.log('Video Testimonials ', this.reviewTestimonials());
      },

      error: (err) => this?.helperService?.errorHandler(err, 'loadTestimonioals()'),
    });
  }

  feedbackToRender = computed(() => {
    const testimonials = this.reviewTestimonials();
    const index = this.reviewCount();
    if (testimonials.length === 0) return null;

    return testimonials[index];
  });

  feedbackSwitcher() {
    this.feedbackTimerId = setTimeout(() => {
      this.feedbackSwitcher();
    }, 5000);

    if (this.reviewCount() < 4) {
      let cnt = this.reviewCount();
      cnt++;
      console.log(this.reviewCount(), 'Review Cnt');
      this.reviewCount.set(cnt);
    } else {
      this.reviewCount.set(0);
      console.log(this.reviewCount(), 'Review Cnt');
    }
  }

  feedbackIndex = computed(() => {
    return this.reviewCount();
  });

  ngOnDestroy(): void {
    if (this.feedbackTimerId) {
      clearTimeout(this.feedbackTimerId);
    }
  }
}

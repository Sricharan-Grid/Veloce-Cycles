import { Component, computed, signal } from '@angular/core';
import { TestimonialInterface } from '../interfaces';
import { DataService } from '../service/data.service';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-video-testimonials-component',
  imports: [],
  templateUrl: './video-testimonials-component.html',
  styleUrl: './video-testiminials-component.scss',
})
export class VideoTestimonialsComponent {
  constructor(
    private dataService: DataService,
    private helperService: HelperService,
  ) {}

  videoTestimonials = signal<TestimonialInterface[]>([]);

  ngOnInit() {
    this.loadTestimonioals();
  }

  loadTestimonioals() {
    this.dataService.getAllTestimonials()?.subscribe({
      next: (res) => {
        if (res && res.length) this?.videoTestimonials?.set(res[0]);
        console.log('Video Testimonials ', this.videoTestimonials());
      },

      error: (err) => this?.helperService?.errorHandler(err, 'loadTestimonioals()'),
    });
  }

  videosToRender = computed(() => {
    return this.videoTestimonials().filter((video) => video.videoUrl);
  });

  // Unmute a Video on Click
  unmuteSelectedVideo(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.muted = false;
  }

  // Mute back a Video once the mouse leaves
  muteOnLeave(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.muted = true;
  }
}

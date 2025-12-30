import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
<section class="py-12 px-4 bg-base-100">
  <div class="container mx-auto max-w-6xl">
    <div class="flex justify-center">
      <div class="aspect-video w-full max-w-4xl">
        <iframe
          src="https://www.youtube.com/embed/wMzq2IjoEgI?si=9R0cIXFGEaY4YDU_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full h-full rounded-lg"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="eager"
          tabindex="0"
          aria-label="Video institucional RMS"
        ></iframe>
      </div>
    </div>
  </div>
</section>
z

    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent {}

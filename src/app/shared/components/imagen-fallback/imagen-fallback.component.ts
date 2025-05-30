import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-fallback',
  templateUrl: './imagen-fallback.component.html',
  styleUrl: './imagen-fallback.component.sass',
})
export class ImagenFallbackComponent {
  @Input() src: string = '';
  @Input() fallback: string = '';
  @Input() alt: string = '';
  url: string = '';

  ngOnInit() {
    this.url = this.src;
  }

  localResponse() {
    this.url = this.fallback;
  }
}

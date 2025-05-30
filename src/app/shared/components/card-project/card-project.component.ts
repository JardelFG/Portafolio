import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.sass',
})
export class CardProjectComponent {
  @Input() title: string = '';
  @Input() ref: string = '';
  @Input() img: string = '';
  @Input() links: string[] = [];
  @Input() description: string = '';
}

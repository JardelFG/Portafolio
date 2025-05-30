import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Jardel FG | Frontend Developer');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Portafolio de Jardel Figueroa, desarrollador frontend con experiencia en Angular, VueJS y más.',
      },
      {
        name: 'keywords',
        content:
          'Angular, Frontend, Portfolio, Programador, Desarrollador, Web',
      },
      {
        name: 'author',
        content: 'Jardel Figueroa',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ]);
  }
}

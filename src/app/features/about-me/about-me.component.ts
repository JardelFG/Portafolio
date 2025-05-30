import { Component } from '@angular/core';

const SKILLS = [
  {
    name: 'angular',
    src: '/assets/icons/favicon.svg',
  },
  {
    name: 'react',
    src: '/assets/icons/icon-react.svg',
  },
  {
    name: 'css',
    src: '/assets/icons/icon-css.svg',
  },
  {
    name: 'html',
    src: '/assets/icons/icon-html5.svg',
  },
  {
    name: 'javascript',
    src: '/assets/icons/icon-javascript.svg',
  },
  {
    name: 'talwind',
    src: '/assets/icons/icon-tailwind.svg',
  },
  {
    name: 'git',
    src: '/assets/icons/icon-git.svg',
  },
];

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass',
})
export class AboutMeComponent {
  expandedActive = false;

  readonly skills = SKILLS;

  showInfoExpanded() {
    return (this.expandedActive = !this.expandedActive);
  }
}

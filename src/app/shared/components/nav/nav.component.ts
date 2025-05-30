import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  activeSection: string = 'home';

  setActive(section: string) {
    this.activeSection = section;
  }

  toHome() {
    this.setActive('home');
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAboutMe() {
    this.setActive('about-me');
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  }
  toProjects() {
    this.setActive('projects');
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    this.setActive('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}

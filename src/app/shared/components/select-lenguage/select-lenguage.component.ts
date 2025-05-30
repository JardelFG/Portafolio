import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-lenguage',
  templateUrl: './select-lenguage.component.html',
  styleUrl: './select-lenguage.component.sass',
})
export class SelectLenguageComponent {
  selectedLanguage = 'es';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang() || 'es';
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }

  onLanguageChange(lang: string) {
    this.translate.use(lang);
  }
}

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HomeComponent } from './features/home/home.component';
import { ButtonNavComponent } from './shared/components/button-nav/button-nav.component';
import { CardProjectComponent } from './shared/components/card-project/card-project.component';
import { ContactlinksComponent } from './shared/components/contact-links/contact-links.component';
import { ContactSocialLinkComponent } from './shared/components/contact-social-link/contact-social-link.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { TagTextComponent } from './shared/components/tag-text/tag-text.component';
import { LayoutComponent } from './features/layout/layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SwitchThemeComponent } from './shared/components/switch-theme/switch-theme.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SelectLenguageComponent } from './shared/components/select-lenguage/select-lenguage.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CardProjectComponent,
    TagTextComponent,
    ButtonNavComponent,
    ContactComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactSocialLinkComponent,
    ContactlinksComponent,
    ProfileCardComponent,
    HomeComponent,
    NavComponent,
    LayoutComponent,
    FooterComponent,
    SwitchThemeComponent,
    SelectLenguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}


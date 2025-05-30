import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-social-link',
  templateUrl: './contact-social-link.component.html',
  styleUrl: './contact-social-link.component.sass'
})
export class ContactSocialLinkComponent {
  @Input() alt=''
  @Input() src=''
}

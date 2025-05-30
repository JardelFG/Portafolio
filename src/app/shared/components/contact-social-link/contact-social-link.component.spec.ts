import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSocialLinkComponent } from './contact-social-link.component';

describe('ContactSocialLinkComponent', () => {
  let component: ContactSocialLinkComponent;
  let fixture: ComponentFixture<ContactSocialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSocialLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSocialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

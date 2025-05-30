import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFallbackComponent } from './imagen-fallback.component';

describe('ImagenFallbackComponent', () => {
  let component: ImagenFallbackComponent;
  let fixture: ComponentFixture<ImagenFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagenFallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

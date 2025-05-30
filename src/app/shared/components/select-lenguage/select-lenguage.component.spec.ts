import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLenguageComponent } from './select-lenguage.component';

describe('SelectLenguageComponent', () => {
  let component: SelectLenguageComponent;
  let fixture: ComponentFixture<SelectLenguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectLenguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLenguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

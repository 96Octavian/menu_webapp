import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPickerComponent } from './menu-picker.component';

describe('MenuPickerComponent', () => {
  let component: MenuPickerComponent;
  let fixture: ComponentFixture<MenuPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPickerComponent]
    });
    fixture = TestBed.createComponent(MenuPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

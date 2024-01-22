import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTelegramComponent } from './not-telegram.component';

describe('NotTelegramComponent', () => {
  let component: NotTelegramComponent;
  let fixture: ComponentFixture<NotTelegramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotTelegramComponent]
    });
    fixture = TestBed.createComponent(NotTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

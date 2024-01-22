import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFulscreenComponent } from './loading-fulscreen.component';

describe('LoadingFulscreenComponent', () => {
  let component: LoadingFulscreenComponent;
  let fixture: ComponentFixture<LoadingFulscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingFulscreenComponent]
    });
    fixture = TestBed.createComponent(LoadingFulscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeNotFoundComponent } from './code-not-found.component';

describe('CodeNotFoundComponent', () => {
  let component: CodeNotFoundComponent;
  let fixture: ComponentFixture<CodeNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeNotFoundComponent]
    });
    fixture = TestBed.createComponent(CodeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

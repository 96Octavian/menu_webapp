import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-code-not-found',
  templateUrl: './code-not-found.component.html',
  styleUrls: ['./code-not-found.component.css']
})
export class CodeNotFoundComponent {
  private code: string = ''
  get Code(): string {
    return this.code
  }
  set Code(value: string) {
    this.code = value
  }

  @Output() codeAdded: EventEmitter<string> = new EventEmitter<string>()
  CheckMenu(): void {
    this.codeAdded.emit(this.Code)
  }
}

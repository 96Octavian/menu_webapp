import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Choice } from '../menu-picker/menu-picker.component';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css']
})
export class QuantityPickerComponent {

  @Input({ required: true }) choice!: Choice;
  @Output() AmountChanged: EventEmitter<void> = new EventEmitter()

  public get CanDecrement(): boolean {
    return this.choice.Amount > 0
  }

  public Increment(): void {
    this.choice.Increment()
    this.AmountChanged.emit()
    // console.log(this.choice.Name + ": " + this.choice.Amount)
  }

  public Decrement(): void {
    if (this.choice.Amount > 0) {
      this.choice.Decrement()
      this.AmountChanged.emit()
    }
    // console.log(this.choice.Name + ": " + this.choice.Amount)
  }
}

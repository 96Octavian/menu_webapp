import { Component, Input } from '@angular/core';
import { Choice } from '../menu-picker/menu-picker.component';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css']
})
export class QuantityPickerComponent {

  @Input({ required: true }) choice!: Choice;

  public get CanDecrement(): boolean {
    return this.choice.Amount > 0
  }

  public Increment(): void {
    this.choice.Increment()
    // console.log(this.choice.Name + ": " + this.choice.Amount)
  }

  public Decrement(): void {
    this.choice.Decrement()
    // console.log(this.choice.Name + ": " + this.choice.Amount)
  }
}

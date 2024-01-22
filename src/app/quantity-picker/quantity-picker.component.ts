import { Component, Input } from '@angular/core';
import { Choice } from '../menu-picker/menu-picker.component';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css']
})
export class QuantityPickerComponent {

  @Input() choice!: Choice;

  public get QuantityId(): string {
    return "quantity-input-" + this.choice.Name
  }

  public Increment(): void {
    this.choice.Increment()
    console.log(this.choice.Name + ": " + this.choice.Amount)
  }

  public Decrement(): void {
    this.choice.Decrement()
    console.log(this.choice.Name + ": " + this.choice.Amount)
  }
}

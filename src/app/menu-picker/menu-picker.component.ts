import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../app.component';

export class Choice {
  private amount: number = 0
  constructor(private name: string) { }

  public get Name(): string {
    return this.name
  }
  public get Amount(): number {
    return this.amount
  }
  public Increment(): void {
    this.amount = this.Amount + 1
  }
  public Decrement(): void {
    if (this.amount > 0)
      this.amount = this.Amount - 1
  }
}

export interface Choices {
  [key: string]: Choice[]
}

@Component({
  selector: 'app-menu-picker',
  templateUrl: './menu-picker.component.html',
  styleUrls: ['./menu-picker.component.css']
})
export class MenuPickerComponent implements OnInit {

  @Input() code: string = ""
  @Input() menu: Menu = {}
  private choices: Choices = {}
  public get Choices(): Choices {
    return this.choices
  }

  ngOnInit(): void {
    for (let section in this.menu) {
      this.choices[section] = this.menu[section].map(meal => new Choice(meal))
    }

    console.log(this.choices)
  }

  Order(): void{
    console.log(this.choices)
  }
}

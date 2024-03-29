import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../app.component';

export class Choice {
  private amount: number = 0
  constructor(private name: string) { }

  get Name(): string {
    return this.name
  }
  get Amount(): number {
    return this.amount
  }
  Increment(): void {
    this.amount = this.Amount + 1
  }
  Decrement(): void {
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

  @Input({ required: true }) code!: string
  @Input({ required: true }) menu!: Menu
  private choices: Choices = {}
  get Choices(): Choices {
    return this.choices
  }

  private sent: boolean = false
  get Sent(): boolean {
    return this.sent
  }

  private hasAtLeastOneOrder: boolean = false
  get HasAtLeastOneOrder(): boolean {
    return this.hasAtLeastOneOrder
  }

  CheckHasAtLeastOneOrder(): boolean {

    const sections: Choice[][] = Object.values(this.Choices)
    const sum: number = sections
      .map(c => Object.values(c))
      .flat()
      .map(o => o.Amount)
      .reduce((partialSum, amount) => partialSum + amount, 0)

    this.hasAtLeastOneOrder = sum !== 0
    if (this.hasAtLeastOneOrder)
      console.log('There is at least one order')
    else
      console.log('There is no order')
    return this.hasAtLeastOneOrder
  }

  CheckChoiceHasAtLeastOneOrder(choice: Choice): boolean {
    this.hasAtLeastOneOrder = choice.Amount > 0
    console.log("Checked: " + choice.Name + (this.hasAtLeastOneOrder ? ' has ' : ' does not have ') + 'at least one order')
    return this.hasAtLeastOneOrder
  }

  ngOnInit(): void {
    for (let section in this.menu) {
      this.choices[section] = this.menu[section].map(meal => new Choice(meal))
    }
    this.CheckHasAtLeastOneOrder()
    // window.Telegram.WebApp.MainButton.setParams({ 'text': 'Send order', 'is_active': true, 'is_visible': true }).onClick(this.Order)
    window.Telegram.WebApp.ready()
  }

  private PrepareData(): string {
    const data: { [key: string]: { [nestedKey: string]: number } } = {};
    for (let section in this.Choices) {
      data[section] = {}
      for (let choice in this.Choices[section]) {
        if (this.Choices[section][choice].Amount > 0) {
          data[section][this.Choices[section][choice].Name] = this.Choices[section][choice].Amount
        }
      }
    }
    return JSON.stringify({ code: this.code, choices: data })
  }

  Order(): void {
    const stringData = this.PrepareData()
    try {
      console.log(stringData)
      window.Telegram.WebApp.sendData(stringData)
      this.sent = true
      window.Telegram.WebApp.close()
      // window.Telegram.WebApp.showAlert(data, window.Telegram.WebApp.close())
    } catch (error) {
      window.Telegram.WebApp.showAlert(error + '\n' + stringData)
    }

  }
}

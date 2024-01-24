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

  @Input({ required: true }) code!: string
  @Input({ required: true }) menu!: Menu
  private choices: Choices = {}
  public get Choices(): Choices {
    return this.choices
  }

  private sent: boolean = false
  public get Sent(): boolean {
    return this.sent
  }

  ngOnInit(): void {
    for (let section in this.menu) {
      this.choices[section] = this.menu[section].map(meal => new Choice(meal))
    }
    window.Telegram.WebApp.MainButton.setParams({ 'text': 'Send order', 'is_active': true, 'is_visible': true }).onClick(this.Order())
    window.Telegram.WebApp.ready()
  }

  PrepareData(): string {
    const data: { [key: string]: { [nestedKey: string]: number } } = {};
    for (let section in this.Choices) {
      data[section] = {}
      for (let choice in this.Choices[section]) {
        if (this.Choices[section][choice].Amount > 0) {
          data[section][this.Choices[section][choice].Name] = this.Choices[section][choice].Amount
        }
      }
    }
    const stringData = JSON.stringify({ code: this.code, choices: data })
    return stringData
  }

  Order(): void {
    try {
      const data: { [key: string]: { [nestedKey: string]: number } } = {};
      for (let section in this.Choices) {
        data[section] = {}
        for (let choice in this.Choices[section]) {
          if (this.Choices[section][choice].Amount > 0) {
            data[section][this.Choices[section][choice].Name] = this.Choices[section][choice].Amount
          }
        }
      }
      const stringData = JSON.stringify({ code: this.code, choices: data })
      console.log(data)
      window.Telegram.WebApp.sendData(data)
      this.sent = true
      window.Telegram.WebApp.close()
      // window.Telegram.WebApp.showAlert(data, window.Telegram.WebApp.close())
    } catch (error) {
      window.Telegram.WebApp.showAlert("Error: " + error)
    }

  }
}

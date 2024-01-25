import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-telegram',
  templateUrl: './not-telegram.component.html',
  styleUrls: ['./not-telegram.component.css']
})
export class NotTelegramComponent {

  @Input({ required: true }) Platform!: string;
  LogoClicked: boolean = true
  SecondClick: boolean = false

  LogoClick(): void {
    this.SecondClick = true
    this.LogoClicked = !this.LogoClicked
  }
}

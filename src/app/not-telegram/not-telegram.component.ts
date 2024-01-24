import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-telegram',
  templateUrl: './not-telegram.component.html',
  styleUrls: ['./not-telegram.component.css']
})
export class NotTelegramComponent {

  @Input({ required: true }) Platform!: string;
  
}

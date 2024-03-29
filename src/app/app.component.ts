import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Menu {
  [key: string]: string[];
}

declare global {
  interface Window {
    Telegram: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private code: string = new URLSearchParams(window.location.search).has('code') ? new URLSearchParams(window.location.search).get('code') ?? "" : ""
  get Code(): string {
    return this.code
  }
  set Code(value: string) {
    this.code = value
  }

  private apiUrl: string = "https://getpantry.cloud/apiv1/pantry/17474c8e-ea5a-4857-a468-744bad4d466b/basket/"

  private menu: Menu = {}
  // private menu: Menu = {
  //   "primi": [
  //     "pasta con le cotiche",
  //     "pasta senza le cotiche"
  //   ],
  //   "secondi": [
  //     "pollo fritto",
  //     "pollo lesso",
  //     "pollo ai ferri",
  //     "pollo al burro"
  //   ],
  //   "contorni": [
  //     "patatine",
  //     "patatine ma diverse"
  //   ]
  // }
  get Menu(): Menu {
    return this.menu
  }
  UserAgent: string = window.navigator.userAgent

  Version: string = window.Telegram.WebApp.version

  Platform: string = window.Telegram.WebApp.platform

  ValidPlatform: boolean = this.Platform !== 'unknown'

  Loading: boolean = false

  get ValidCode(): boolean {
    return Object.keys(this.menu).length > 0;
  }

  constructor(private http: HttpClient) { }

  private fetchMenu(): void {
    if (!this.ValidPlatform) {
      console.log('Not fetching menu because this is not a valid platform')
      return
    }

    if (this.code.length === 0) {
      console.log('No code found in params')
      return
    }

    if (this.ValidCode) {
      console.log("Already have a menu")
      return
    }

    console.log('Fetching menu...')

    this.Loading = true
    this.http.get<Menu>(this.apiUrl + this.code).subscribe({
      next: (data) => {
        this.menu = data
        console.log("Menu received")
        console.log(this.menu)
      },
      error: (error) => {
        this.Loading = false
        this.code = ''
        this.menu = {}
        // Handle error response
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
        } else {
          // Server-side error
          console.error(
            `Backend returned code ${error.status}, body was: ${error.error}`
          );
        }
      },
      complete: () => {
        this.Loading = false
        console.info('Done fetching menu')
      }
    });
  }

  CodeAdded(code: string): void {
    this.code = code
    this.fetchMenu()
  }

  ngOnInit() {
    this.fetchMenu()
  }
}

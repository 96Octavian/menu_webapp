import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotTelegramComponent } from './not-telegram/not-telegram.component';
import { CodeNotFoundComponent } from './code-not-found/code-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingFulscreenComponent } from './loading-fulscreen/loading-fulscreen.component';
import { MenuPickerComponent } from './menu-picker/menu-picker.component';
import { QuantityPickerComponent } from './quantity-picker/quantity-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotTelegramComponent,
    CodeNotFoundComponent,
    LoadingFulscreenComponent,
    MenuPickerComponent,
    QuantityPickerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

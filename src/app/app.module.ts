import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyViewComponent } from './currency-view/currency-view.component';
import { currencyServiceInjectables } from './currency-request/currency-request.injectables';

@NgModule({
  declarations: [AppComponent, CurrencyViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [currencyServiceInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}

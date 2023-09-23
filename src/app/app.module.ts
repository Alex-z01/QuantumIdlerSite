/*
This is the main application module. It's the entry point of your Angular application.
It imports and configures other modules, such as the RouterModule for routing, and it declares and bootstraps the AppComponent.
This module is responsible for wiring together all the parts of your application and making them work together.
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudyEffectComponent } from './cloudy-effect/cloudy-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudyEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

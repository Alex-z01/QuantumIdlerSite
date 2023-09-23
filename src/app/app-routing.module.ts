/*
This file defines the routing configuration for your Angular application. It's used to set up routes and navigation within the app.
It typically imports and configures the RouterModule to define routes, and it may include route guards, resolvers, and other route-related configurations.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

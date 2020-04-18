import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMediaQueryModule } from 'projects/ng-media-query/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgMediaQueryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

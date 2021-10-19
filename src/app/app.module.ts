import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { DatePipe } from './date.pipe';
import { ThemerDirective } from './themer.directive';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    DatePipe,
    ThemerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

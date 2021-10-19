import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { GlobalHttpInterceptorService } from './services/globalhttpinterceptor.service';
import { DatePipe } from './date.pipe';
import { ThemerDirective } from './themer.directive';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    ThemerDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ExploreComponent,
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

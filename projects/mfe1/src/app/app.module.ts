import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

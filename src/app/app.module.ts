import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CalendarComponent} from './calendar/calendar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'calendar', component: CalendarComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

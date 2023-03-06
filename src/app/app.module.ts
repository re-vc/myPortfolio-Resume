import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RoverlayComponent } from './roverlay/roverlay.component';
import { AniverticalbannerComponent } from './aniverticalbanner/aniverticalbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoverlayComponent,
    AniverticalbannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

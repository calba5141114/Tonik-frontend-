import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeUpdatesComponent } from './home-updates/home-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeCarouselComponent,
    HomeWelcomeComponent,
    HomeUpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
